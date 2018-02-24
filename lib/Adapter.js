const invariant = require('invariant')
const DataPoint = require('./DataPoint')
const Tuple = require('./Tuple')
const { set } = require('./algorithm')
const { NullConstraint, TypeConstraint } = require('./constraints')

/** @module */
const Adapter = exports;

/**
 * Create a new adapter for a bunch of metrics.
 *
 * @param  {Array.<Metric>} metrics
 * @return {Adapter}
 */
Adapter.create = (metrics = []) => ({
  metrics: metrics.map(createMetric),
  points: []
})

/**
 * Produce metric points from a list of application events according to the
 * metrics defined in the adapter.
 *
 * @param {Adapter} adapter
 * @param {Array.<ApplicationEvent>} events
 * @param {Any?} context
 *
 * @return {Object} nextState
 *         The advanced state of the adapter which you can feed to a future
 *         call to this routine.
 *
 * @return {Array.<Metric>} nextState.metrics
 *         The metrics in their advanced states after having (possibly) consumed
 *         the events and produced their points.
 *
 * @return {Array.<MetricPoint>} nextState.points
 *         The list of metric points you probably want to submit to your
 *         analytics service.
 *
 * @return {Any} nextState.context
 *         The advanced context after having gone through all the metric
 *         constraints.
 */
Adapter.reduce = ({ metrics: initialMetrics }, events, initialContext) => {
  events.forEach(event => {
    invariant(!!event && typeof event === 'object',
      `Malform application event, expected an object. ${JSON.stringify(event)}`
    );
  })

  const produceMetricPointsOverEvents = produceMetricPoints(events)
  const {
    context: advancedContext,
    metrics: advancedMetricPointV,
  } = initialMetrics.reduce(({ context, metrics }, metric) => {
    const advancement = produceMetricPointsOverEvents(metric, context)

    return {
      context: advancement.context,
      metrics: metrics.concat({
        metric: advancement.metric,
        points: advancement.points
      })
    }
  }, {
    context: initialContext,
    metrics: []
  });

  const serializedPoints = advancedMetricPointV.reduce((list, { metric, points }) => {
    return list.concat(points.map(serializeMetricPoint(metric)))
  }, [])

  return {
    context: advancedContext,
    points: serializedPoints,
    metrics: advancedMetricPointV.map(x => x.metric),
  }
}

const createMetric = ({ constraints = [], dataPoints = [], events, name }) => ({
  name,
  constraints: (
    constraints
      // morph convenience "events" property into a TypeConstraint
      .concat(events ? TypeConstraint(events) : [])

      // assign defaults
      .map(constraint => set(NullConstraint, constraint))

      // instantiate each constraint with a blank state and grab a reference to
      // its hooks. The name is for reporting purposes and isn't really used by
      // us.
      .map(constraint => ({
        name: constraint.name,
        state: constraint.getInitialState(),
        hooks: constraint
      }))
  ),
  dataPoints: dataPoints.map(DataPoint.of),
})

const serializeMetricPoint = metric => ({ event, data }) => ({
  name: metric.name,
  data: DataPoint.toMap(data),
  source: { event, data },
})

// A candidate implementation for The State Machine of DOOM is here for your
// pleasure.
//
// For each event, we will...
//
// 1. compute the data with the initial context
// 2. check with each constraint whether the event should be consumed at all
// 3. should the event be eligible for consumption, we will notify all the
//    constraints to give them a chance to advance their state and optionally
//    adjust the context
// 4. once the event has been consumed, we check with each constraint whether a
//    metric point should be produced
// 5. we re-compute the data points with the (potentially) advanced context
//    during consumption
// 6. should a metric point be eligible for production, we will again notify all
//    the [ALREADY ADVANCED] constraints to give them a final chance to further
//    advance their state and optionally adjust the context
// 7. we re-compute the data points once more with the (potentially) advanced
//    context during production
// 8. we produce a metric point for the current event and its data points
//
// Now the reason this gets more complicated is because the constraints' states
// as well as the context are shared and any side-effects applied to them have
// to be reflected by each successive application. So, the constraints and
// context for events[0] may potentially be different than those for events[1]
// and so on.
//
const produceMetricPoints = events => (initialMetric, initialContext) => (
  events.reduce(({ context, metric, points }, event) => {
    const data = metric.dataPoints.map(DataPoint.extract(event, context));
    const { constraints } = metric

    const shouldConsumeEvent = constraints.every(x =>
      x.hooks.shouldConsumeEvent(x.state, event, data, context)
    )

    // should we track the event?
    if (!shouldConsumeEvent) {
      return { context, metric, points }
    }

    // advance all constraints and potentially update the context
    const [
      constraintsAfterConsumption,
      contextAfterConsumption
    ] = applyEventWasConsumed(constraints, event, data, context)

    const dataAfterConsumption = (
      metric.dataPoints.map(DataPoint.extract(event, contextAfterConsumption))
    )

    // can we submit the event?
    const shouldProducePoint = constraintsAfterConsumption.every(x =>
      x.hooks.shouldProducePoint(x.state, event, dataAfterConsumption, contextAfterConsumption)
    )

    if (!shouldProducePoint) {
      return {
        context: contextAfterConsumption,
        metric: set(metric, { constraints: constraintsAfterConsumption }),
        points,
      }
    }

    // advance all constraints and potentially update the context once more
    const [
      constraintsAfterProduction,
      contextAfterProduction
    ] = applyPointWasProduced(constraintsAfterConsumption, event, data, contextAfterConsumption)

    const dataAfterProduction = (
      metric.dataPoints.map(DataPoint.extract(event, contextAfterProduction))
    )

    return {
      context: contextAfterProduction,
      metric: set(metric, { constraints: constraintsAfterProduction }),
      points: points.concat({ event, data: dataAfterProduction })
    }
  }, {
    context: initialContext,
    metric: initialMetric,
    points: [],
  })
)

const applyConstraintHook = hook => (constraints, event, data, context) => (
  constraints.reduce(([ _constraints, _context ], constraint) => {
    const advancement = constraint.hooks[hook](constraint.state, event, data, _context)
    const [ nextState, nextContext = _context ] = extractAdvancement(advancement)

    return [
      _constraints.concat(
        set(constraint, { state: nextState })
      ),
      nextContext
    ]
  }, [[], context])
)

// a constraint hook may either yield its next state _or_ a tuple which has to
// be interpreted as an advancement to both the state and the context
//
// this will return an array containing the next state and maybe the next
// context
const extractAdvancement = advancement => {
  if (Tuple.is(advancement)) {
    return [ Tuple.firstOf(advancement), Tuple.secondOf(advancement) ]
  }
  else {
    return [ advancement ]
  }
}

const applyEventWasConsumed = applyConstraintHook('eventWasConsumed')
const applyPointWasProduced = applyConstraintHook('pointWasProduced')