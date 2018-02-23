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
  metrics: metrics.map(defineMetric),
  events: [],
})

/**
 * Generate metric events from a list of application events according to the
 * metrics defined in the adapter.
 *
 * @param  {Adapter} adapter
 * @param  {Array.<ApplicationEvent>} events
 *
 * @return {Array.<MetricEvent>}
 *         The list of metric events you probably want to submit to your
 *         analytics service. If you do, you must call #advance to advance the
 *         adapter's state.
 */
Adapter.reduce = function(state, events, deps) {
  events.forEach(event => {
    invariant(!!event && typeof event === 'object',
      `Malform application event, expected an object. ${JSON.stringify(event)}`
    );
  })

  const {
    deps: advancedDeps,
    metrics: advancedMetrics,
  } = state.metrics.reduce((nextState, metric) => {
    const advancedState = advanceMetric(metric, events, nextState.deps)

    nextState.deps = advancedState.deps
    nextState.metrics = nextState.metrics.concat({
      metric: advancedState.metric,
      metricEvents: advancedState.metricEvents
    })

    return nextState
  }, { metrics: [], deps });

  const serializedEvents = advancedMetrics.reduce((list, { metric, metricEvents }) => {
    return list.concat(metricEvents.map(serializeMetricEvent(metric)))
  }, [])

  return {
    deps: advancedDeps,
    events: serializedEvents,
    metrics: advancedMetrics.map(x => x.metric),
  }
}

const defineMetric = ({ constraints = [], dataPoints = [], events, name }) => ({
  name,
  constraints: (
    constraints
      .concat(events ? TypeConstraint(events) : [])
      .map(assignConstraintDefaults)
      .map(x => ({
        name: x.name,
        state: x.getInitialState(),
        hooks: x
      }))
  ),
  dataPoints: dataPoints.map(DataPoint.of),
})

const assignConstraintDefaults = x => Object.assign({}, NullConstraint, x)

const serializeMetricEvent = metric => ({ event, data }) => ({
  name: metric.name,
  data: DataPoint.toMap(data),
  source: { metric, event, data },
})

const advanceMetric = (currentMetric, events, initialDeps) => (
  events.reduce(({ metric, metricEvents, deps }, event) => {
    const data = metric.dataPoints.map(DataPoint.extract(event));
    const { constraints } = metric

    // should we track the event?
    if (!constraints.every(x => x.hooks.shouldConsumeEvent(x.state, event, data, deps))) {
      return { metric, metricEvents, deps }
    }

    // advance all constraints and potentially update the dependencies
    const [
      advancedConstraints,
      advancedDeps
    ] = applyDidTrack(constraints, event, data, deps)

    // can we submit the event?
    if (!advancedConstraints.every(x => x.hooks.shouldProducePoint(x.state, event, data, advancedDeps))) {
      return {
        deps: advancedDeps,
        metric: set(metric, { constraints: advancedConstraints }),
        metricEvents,
      }
    }

    // advance all constraints and potentially update the dependencies once more
    const [
      finalConstraints,
      finalDeps
    ] = applyDidSubmit(advancedConstraints, event, data, advancedDeps)

    return {
      deps: finalDeps,
      metric: set(metric, { constraints: finalConstraints }),
      metricEvents: metricEvents.concat({ event, data })
    }
  }, {
    deps: initialDeps,
    metric: currentMetric,
    metricEvents: [],
  })
)

// const track = (metric, metricEvents, event, data, deps) => {
//   const { constraints } = metric

//   // should we track the event?
//   if (!constraints.every(x => x.shouldConsumeEvent(x, event, data, deps))) {
//     return { metric, metricEvents, deps }
//   }

//   // advance all constraints and potentially update the dependencies
//   const [
//     advancedConstraints,
//     advancedDeps
//   ] = applyDidTrack(constraints, event, data, deps)

//   return {
//     deps: advancedDeps,
//     metric: set(metric, { constraints: advancedConstraints }),
//     metricEvents,
//   }
// }

// const submit = (metric, metricEvents, event, data, deps) => {
//   const { constraints } = metric

//   // can we submit the event?
//   if (!constraints.every(x => x.shouldProducePoint(x, event, data, deps))) {
//     return { deps, metric, metricEvents }
//   }

//   // advance all constraints and potentially update the dependencies once more
//   const [
//     advancedConstraints,
//     advancedDeps
//   ] = applyDidSubmit(constraints, event, data, deps)

//   return {
//     deps: advancedDeps,
//     metric: set(metric, { constraints: advancedConstraints }),
//     metricEvents
//   }
// }

const applyConstraintHook = hook => (constraints, event, data, deps) => (
  constraints.reduce(([ _constraints, _deps ], constraint) => {
    const advancement = constraint.hooks[hook](constraint.state, event, data, _deps)

    let nextState = advancement
    let nextDeps = _deps

    if (Tuple.is(advancement)) {
      nextState = Tuple.firstOf(advancement)
      nextDeps = Tuple.secondOf(advancement)
    }

    return [
      _constraints.concat(Object.assign({}, constraint, { state: nextState })),
      nextDeps
    ]
  }, [[], deps])
)

const applyDidTrack = applyConstraintHook('eventWasConsumed')
const applyDidSubmit = applyConstraintHook('pointWasProduced')