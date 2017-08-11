const EventSequence = require('./EventSequence')
const DataPoint = require('./DataPoint')
const Strategy = require('./Strategy')
const GranularStrategy = require('./GranularStrategy')
const { set } = require('./algorithm')

const defineMetric = ({ name, events, dataPoints = [], strategy, }) => ({
  name: name,
  strategy: strategy || GranularStrategy(),
  eventSequence: EventSequence.of(events),
  dataPoints: dataPoints.map(DataPoint.of),
})

const serializeMetricEvent = ({ metric, event, data }) => ({
  name: metric.name,
  data,
  source: { metric, event, data }
});

const filterApplicableEvents = (metric, events) => {
  let { strategy, eventSequence } = metric;

  return events.reduce((list, event) => {
    const data = metric.dataPoints.map(DataPoint.extract(event));

    if (!EventSequence.appliesTo(eventSequence, event, data)) {
      return list;
    }
    else if (!Strategy.appliesTo(strategy, event, data)) {
      return list;
    }
    else {
      strategy = Strategy.step(strategy, event, data);
      eventSequence = EventSequence.step(eventSequence, event, data);

      return list.concat({ metric, event, data })
    }
  }, [])
}

/**
 * Create a new adapter for a bunch of metrics.
 *
 * @param  {Array.<Metric>} metrics
 * @return {Adapter}
 */
exports.create = function(metrics = []) {
  return { metrics: metrics.map(defineMetric) }
}

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
exports.reduce = function(adapter, events) {
  return adapter.metrics
    .reduce((list, metric) => list.concat(filterApplicableEvents(metric, events)), [])
    .map(serializeMetricEvent)
  ;
}

/**
 * Advance the state of the adapter components, like aggregation strategies and
 * event sequences.
 *
 * You MUST call this API if you have called #reduce and from that point forward
 * you should use the advanced adapter instance returned by this function and
 * discard the old one.
 *
 * @param  {Adapter} adapter
 * @param  {Array.<MetricEvents>} metricEvents
 *         What you've received from the call to #reduce.
 *
 * @return {Adapter}
 *         The adapter in the advanced state.
 */
exports.advance = function(adapter, metricEvents) {
  return {
    metrics: adapter.metrics.map(advanceMetric(metricEvents))
  };
}

const advanceMetric = metricEvents => metric => {
  return metricEvents
    .filter(x => x.source.metric === metric)
    .reduce(function(advancedMetric, { source: { event, data } }) {
      return set(advancedMetric, {
        strategy: Strategy.step(advancedMetric.strategy, event, data),
        eventSequence: EventSequence.step(advancedMetric.eventSequence, event, data),
      })
    }, set(metric))
  ;
};