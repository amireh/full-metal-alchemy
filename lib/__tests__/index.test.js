const {
  Adapter,
  GranularStrategy,
  BufferedStrategy,
  DataPoint,
  EventSequence,
  Period,
} = require('../')

const Strategy = require('../Strategy');
const { assert, createSinonSuite } = require('./utils')

describe('scitylana::Adapter', function() {
  const sinon = createSinonSuite(this);

  describe('.create', function() {
    it('works', function() {
      Adapter.create();
    })

    it('defaults to the GranularStrategy', function() {
      const subject = Adapter.create([{}])

      assert.deepEqual(subject.metrics[0].strategy, GranularStrategy())
    })

    it('morphs "events" into an event sequence', function() {
      const subject = Adapter.create([{ events: [ 'foo' ] }])

      assert.deepEqual(subject.metrics[0].eventSequence, EventSequence.of([ 'foo' ]))
    })

    it('accepts an event sequence', function() {
      const sequence = EventSequence.Any([ 'foo' ]);
      const subject = Adapter.create([{ events: sequence }])

      assert.equal(subject.metrics[0].eventSequence, sequence)
    })

    it('creates data points', function() {
      const subject = Adapter.create([{ dataPoints: [ 'foo' ] }])

      assert.deepEqual(subject.metrics[0].dataPoints[0], DataPoint.of('foo'))
    })
  })

  describe('.reduce', function() {
    it('works', function() {
      const adapter = Adapter.create([
        {
          name: 'Metric',
          strategy: GranularStrategy(),
          events: [
            'something-happened'
          ]
        }
      ]);

      const events = Adapter.reduce(adapter, [
        { name: 'something-happened', data: {} }
      ])

      assert.equal(events.length, 1);
      assert.include(events[0], {
        name: 'Metric'
      })
    })

    it('serializes data points', function() {
      const adapter = Adapter.create([
        {
          name: 'Metric',
          strategy: GranularStrategy(),
          dataPoints: [ 'what' ],
          events: [
            'something-happened'
          ]
        }
      ]);

      const events = Adapter.reduce(adapter, [
        {
          name: 'something-happened',
          data: {
            what: 'foo'
          }
        }
      ])

      assert.equal(events[0].data.length, 1)
      assert.include(events[0].data[0], {
        name: 'what',
        value: 'foo'
      })
    })
  })

  describe('.advance', function() {
    it('steps strategies', function() {
      sinon.spy(Strategy, 'step');

      const strategy = BufferedStrategy({ period: Period.days(1) });
      const metric = {
        strategy,
        events: [ 'some-event' ]
      }

      const subject = Adapter.create([ metric ])

      const event = { name: 'some-event' }

      const metricEvents = Adapter.reduce(subject, [ event ])

      assert.equal(metricEvents.length, 1)

      const nextAdapter = Adapter.advance(subject, metricEvents);

      assert.calledWithExactly(Strategy.step,
        strategy,
        metricEvents[0].source.event,
        metricEvents[0].source.data
      );

      const nextMetricEvents = Adapter.reduce(nextAdapter, [event]);

      assert.equal(nextMetricEvents.length, 0);

      sinon.clock.tick(Period.toMilliseconds(strategy.period) + 1)

      const nextMetricEventsLater = Adapter.reduce(nextAdapter, [event]);

      assert.equal(nextMetricEventsLater.length, 1);
    })

    it('steps for all events', function() {
      sinon.spy(Strategy, 'step');

      const strategy = BufferedStrategy({ period: Period.days(1) });
      const metric = {
        strategy,
        events: [ 'some-event' ]
      }

      const subject = Adapter.create([ metric ])

      const event1 = { name: 'some-event' }
      const event2 = { name: 'some-event' }

      const metricEvents = Adapter.reduce(subject, [ event1, event2 ])

      assert.equal(metricEvents.length, 1)

      const nextAdapter = Adapter.advance(subject, metricEvents);

      assert.calledWithExactly(Strategy.step,
        strategy,
        event1,
        metricEvents[0].source.data
      );

      const nextMetricEvents = Adapter.reduce(nextAdapter, [event1, event2]);

      assert.equal(nextMetricEvents.length, 0);

      sinon.clock.tick(Period.toMilliseconds(strategy.period) + 1)

      const nextMetricEventsLater = Adapter.reduce(nextAdapter, [event1, event2]);

      assert.equal(nextMetricEventsLater.length, 1);
    })

    it('steps event sequences')
  })
})