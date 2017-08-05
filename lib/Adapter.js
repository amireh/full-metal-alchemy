const EventSequence = require('./EventSequence')
const DataPoint = require('./DataPoint')
const Strategy = require('./Strategy')
const GranularStrategy = require('./GranularStrategy')

const realizeMetric = ({ name, events, dataPoints = [], strategy, }) => ({
  name: name,
  strategy: strategy || GranularStrategy(),
  eventSequence: EventSequence.of(events),
  dataPoints: dataPoints.map(DataPoint.of),
})

const createMetricEvent = ({ metric, event }) => ({
  name: metric.name,
  data: metric.dataPoints.map(DataPoint.extract(event))
});

const filterApplicableEvents = (metric, events) => events.reduce((list, event) => {
  if (!EventSequence.contains(metric.eventSequence, event)) {
    return list;
  }
  else if (!Strategy.appliesTo(metric.strategy, event)) {
    return list;
  }
  else {
    return list.concat({ metric, event })
  }
}, [])

// (Array.<MetricSpecification>): Adapter
exports.create = function(metrics = []) {
  return { metrics: metrics.map(realizeMetric) }
}

// (Adapter, Event): Array.<MetricEvent>
exports.consume = function(adapter, events) {
  return adapter.metrics
    .reduce((list, metric) => list.concat(filterApplicableEvents(metric, events)), [])
    .map(createMetricEvent)
  ;
}
