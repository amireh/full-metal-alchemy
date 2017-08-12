const invariant = require('invariant')
const Constraint = require('./Constraint')
const DataPoint = require('./DataPoint')
const Buffer = require('./Buffer')
const NullBuffer = require('./NullBuffer')
const NullConstraint = require('./NullConstraint')
const { set } = require('./algorithm')

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

const defineMetric = ({ name, events, dataPoints = [], buffer, }) => ({
  name: name,
  events,
  buffer: buffer || NullBuffer(),
  constraint: constrainEvents(events),
  dataPoints: dataPoints.map(DataPoint.of),
})

const constrainEvents = events => (
  Constraint.isConstraint(events) ? events : NullConstraint(events)
)

const serializeMetricEvent = metric => ({ event, data }) => ({
  name: metric.name,
  data: DataPoint.toMap(data),
  source: { metric, event, data },
})

const advanceMetric = (currentMetric, events) => events.reduce(({ metric, metricEvents }, event) => {
  const data = metric.dataPoints.map(DataPoint.extract(event));

  if (!Constraint.appliesTo(metric.constraint, event, data)) {
    return { metric, metricEvents } ;
  }

  // unfortunate
  const nextConstraint = Constraint.consume(metric.constraint, event, data);

  const canAdd = (
    Constraint.fulfilled(nextConstraint, event, data) &&
    Buffer.wants(metric.buffer, event, data)
  );

  if (canAdd) {
    return {
      metric: set(metric, {
        constraint: nextConstraint,
        buffer: Buffer.push(metric.buffer, event, data)
      }),
      metricEvents: metricEvents.concat({ event, data })
    }
  }
  else {
    return {
      metric: set(metric, { constraint: nextConstraint }),
      metricEvents
    };
  }
}, { metric: currentMetric, metricEvents: [] })

