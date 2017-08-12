const invariant = require('invariant')
const Constraint = require('./Constraint')
const DataPoint = require('./DataPoint')
const Strategy = require('./Strategy')
const GranularStrategy = require('./GranularStrategy')
const { set } = require('./algorithm')
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
 *
 * @typedef {ApplicationEvent}
 *
 * An object representing an application event.
 *
 * @property {!String} name
 *           The name of the event that is referenced in metric specifications.
 *
 * @property {?Object} data
 *           A map of the event's data to be serialized using the dataPoints
 *           specification.
 */
Adapter.reduce = function(state, events) {
  events.forEach(event => {
    invariant(!!event && typeof event === 'object',
      `Malform application event, expected an object. ${JSON.stringify(event)}`
    );
  })

  return state.metrics
    .map(metric => advanceMetric(metric, events))
    .reduce(function(nextState, { metric, metricEvents }) {
      nextState.events = nextState.events.concat(metricEvents.map(serializeMetricEvent(metric)))
      nextState.metrics.push(metric);

      return nextState;
    }, set(state, { metrics: [], events: [] }))
  ;
}

const defineMetric = ({ name, events, dataPoints = [], strategy, }) => ({
  name: name,
  strategy: strategy || GranularStrategy(),
  eventSequence: Constraint.of(events),
  dataPoints: dataPoints.map(DataPoint.of),
})

const serializeMetricEvent = metric => ({ event, data }) => ({
  name: metric.name,
  data: DataPoint.toMap(data),
  source: { metric, event, data },
})

const advanceMetric = (metric, events) => events.reduce((state, event) => {
  const { metric: nextMetric, metricEvents } = state;
  const data = nextMetric.dataPoints.map(DataPoint.extract(event));

  if (!Constraint.appliesTo(nextMetric.eventSequence, event, data)) {
    return state;
  }

  nextMetric.eventSequence = Constraint.step(nextMetric.eventSequence, event, data);

  if (!Constraint.fulfilled(nextMetric.eventSequence, event, data)) {
    return state;
  }
  else if (!Strategy.appliesTo(nextMetric.strategy, event, data)) {
    return state;
  }

  nextMetric.strategy = Strategy.step(nextMetric.strategy, event, data);
  metricEvents.push({ event, data, })

  return state
}, { metric: set(metric), metricEvents: [] })

