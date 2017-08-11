const EventSequence = require('./EventSequence')
const DataPoint = require('./DataPoint')
const Strategy = require('./Strategy')
const GranularStrategy = require('./GranularStrategy')

const defineMetric = ({ name, events, dataPoints = [], strategy, }) => ({
  name: name,
  strategy: strategy || GranularStrategy(),
  eventSequence: EventSequence.of(events),
  dataPoints: dataPoints.map(DataPoint.of),
})

const serializeMetricEvent = ({ metric, /*event,*/ data }) => ({
  name: metric.name,
  data
});

const filterApplicableEvents = (metric, events) => events.reduce((list, event) => {
  const data = metric.dataPoints.map(DataPoint.extract(event));

  if (!EventSequence.contains(metric.eventSequence, event, data)) {
    return list;
  }
  else if (!Strategy.appliesTo(metric.strategy, event, data)) {
    return list;
  }
  else {
    return list.concat({ metric, event, data })
  }
}, [])

// (Array.<MetricSpecification>): Adapter
exports.create = function(metrics = []) {
  return { metrics: metrics.map(defineMetric) }
}

// (Adapter, Event): Array.<MetricEvent>
exports.consume = function(adapter, events) {
  return adapter.metrics
    .reduce((list, metric) => list.concat(filterApplicableEvents(metric, events)), [])
    .map(serializeMetricEvent)
  ;
}
