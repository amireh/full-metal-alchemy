const {
  Adapter,
  GranularStrategy,
  BufferedStrategy,
  DataPoint,
  Constraint,
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

      assert.deepEqual(subject.metrics[0].eventSequence, Constraint.of([ 'foo' ]))
    })

    it('accepts an event sequence', function() {
      const sequence = Constraint.None([ 'foo' ]);
      const subject = Adapter.create([{ events: sequence }])

      assert.equal(subject.metrics[0].eventSequence, sequence)
    })

    it('creates data points', function() {
      const subject = Adapter.create([{ dataPoints: [ 'foo' ] }])

      assert.ok(typeof subject.metrics[0].dataPoints[0] === 'object')
      assert.include(subject.metrics[0].dataPoints[0], { name: 'foo' })
    })
  })

  describe('.reduce', function() {
    it('works', function() {
      const state = Adapter.create([
        {
          name: 'Metric',
          strategy: GranularStrategy(),
          events: [
            'something-happened'
          ]
        }
      ]);

      const nextState = Adapter.reduce(state, [
        { name: 'something-happened', data: {} }
      ])

      assert.equal(nextState.events.length, 1);
      assert.include(nextState.events[0], {
        name: 'Metric'
      })
    })

    it('serializes data points', function() {
      const state = Adapter.create([
        {
          name: 'Metric',
          strategy: GranularStrategy(),
          dataPoints: [ 'what' ],
          events: [
            'something-happened'
          ]
        }
      ]);

      const { events } = Adapter.reduce(state, [
        {
          name: 'something-happened',
          data: {
            what: 'foo'
          }
        }
      ])

      assert.include(events[0].data, {
        'what': 'foo'
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

      const withFirstEvent = Adapter.reduce(subject, [ event ])

      assert.equal(withFirstEvent.events.length, 1)

      assert.calledWithExactly(Strategy.step,
        strategy,
        withFirstEvent.events[0].source.event,
        withFirstEvent.events[0].source.data
      );

      const withSecondEvent = Adapter.reduce(withFirstEvent, [event]);

      assert.equal(withSecondEvent.events.length, 0);

      sinon.clock.tick(Period.toMilliseconds(strategy.period) + 1)

      const withThirdEventLater = Adapter.reduce(withSecondEvent, [event]);

      assert.equal(withThirdEventLater.events.length, 1);
    })

    it('steps for all events', function() {
      const strategy = BufferedStrategy({ period: Period.days(1) });
      const metric = { strategy, events: [ 'some-event' ] }

      const state = Adapter.create([ metric ])

      const event1 = { name: 'some-event' }
      const event2 = { name: 'some-event' }

      const withFirstBatch = Adapter.reduce(state, [ event1, event2 ])

      assert.equal(withFirstBatch.events.length, 1)

      const withSecondBatch = Adapter.reduce(withFirstBatch, [event1, event2]);

      assert.equal(withSecondBatch.events.length, 0);

      sinon.clock.tick(Period.toMilliseconds(strategy.period) + 1)

      const withThirdBatchLater = Adapter.reduce(withSecondBatch, [event1, event2]);

      assert.equal(withThirdBatchLater.events.length, 1);
    })

    it('advances constraints (Constraint.None)', function() {
      const eventA = { name: 'a' }
      const eventB = { name: 'b' }
      const metric = { events: Constraint.None([ eventA.name, eventB.name ]) }
      const initial = Adapter.create([ metric ])

      assert.equal(Adapter.reduce(initial, [ eventA ]).events.length, 1)
      assert.equal(Adapter.reduce(initial, [ eventB ]).events.length, 1)
      assert.equal(Adapter.reduce(initial, [ eventA, eventB ]).events.length, 2)

      const advanced = Adapter.reduce(initial, [ eventA ]);

      assert.equal(Adapter.reduce(advanced, [ eventA ]).events.length, 1)
      assert.equal(Adapter.reduce(advanced, [ eventB ]).events.length, 1)
      assert.equal(Adapter.reduce(advanced, [ eventA, eventB ]).events.length, 2)
    })
  })
})