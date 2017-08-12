const {
  Adapter,
  TimeBuffer,
  Constraint,
  Period,
} = require('../')

const NullBuffer = require('../NullBuffer')
const NullConstraint = require('../NullConstraint')
const Buffer = require('../Buffer');
const { assert, createSinonSuite } = require('./utils')

describe('scitylana::Adapter', function() {
  const sinon = createSinonSuite(this);

  describe('.create', function() {
    it('works', function() {
      Adapter.create();
    })

    it('defaults to NullBuffer buffering', function() {
      const subject = Adapter.create([{}])

      assert.deepEqual(subject.metrics[0].buffer, NullBuffer())
    })

    it('defaults to NullConstraint constraint', function() {
      const subject = Adapter.create([{ events: [ 'foo' ] }])

      assert.deepEqual(subject.metrics[0].constraint, NullConstraint([ 'foo' ]))
    })

    it('accepts a constraint', function() {
      const constrained = NullConstraint([ 'foo' ]);
      const subject = Adapter.create([{ events: constrained }])

      assert.equal(subject.metrics[0].constraint, constrained)
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
      sinon.spy(Buffer, 'wants');
      sinon.spy(Buffer, 'push');

      const buffer = TimeBuffer({ period: Period.days(1) });
      const metric = {
        buffer,
        events: [ 'some-event' ]
      }

      const subject = Adapter.create([ metric ])

      const event = { name: 'some-event' }

      const withFirstEvent = Adapter.reduce(subject, [ event ])

      assert.equal(withFirstEvent.events.length, 1)

      assert.calledWithExactly(Buffer.wants,
        buffer,
        withFirstEvent.events[0].source.event,
        withFirstEvent.events[0].source.data
      );

      const withSecondEvent = Adapter.reduce(withFirstEvent, [event]);

      assert.equal(withSecondEvent.events.length, 0);

      sinon.clock.tick(Period.toMilliseconds(buffer.period) + 1)

      const withThirdEventLater = Adapter.reduce(withSecondEvent, [event]);

      assert.equal(withThirdEventLater.events.length, 1);
    })

    it('steps for all events', function() {
      const buffer = TimeBuffer({ period: Period.days(1) });
      const metric = { buffer, events: [ 'some-event' ] }

      const state = Adapter.create([ metric ])

      const event1 = { name: 'some-event' }
      const event2 = { name: 'some-event' }

      const withFirstBatch = Adapter.reduce(state, [ event1, event2 ])

      assert.equal(withFirstBatch.events.length, 1)

      const withSecondBatch = Adapter.reduce(withFirstBatch, [event1, event2]);

      assert.equal(withSecondBatch.events.length, 0);

      sinon.clock.tick(Period.toMilliseconds(buffer.period) + 1)

      const withThirdBatchLater = Adapter.reduce(withSecondBatch, [event1, event2]);

      assert.equal(withThirdBatchLater.events.length, 1);
    })

    it('advances constraints (NullConstraint)', function() {
      const eventA = { name: 'a' }
      const eventB = { name: 'b' }
      const metric = { events: NullConstraint([ eventA.name, eventB.name ]) }
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