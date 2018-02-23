const {
  Adapter,
  C,
  Period,
} = require('../')

const { assert, createSinonSuite } = require('./utils')

describe('scitylana::Adapter', function() {
  const sinon = createSinonSuite(this);

  describe('.create', function() {
    it('works', function() {
      Adapter.create();
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
          constraints: [
            C.TypeConstraint([
              'something-happened'
            ])
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
          constraints: [
            C.TypeConstraint([ 'something-happened' ])
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
    const reduce = Adapter.reduce

    it('steps strategies', function() {
      const deps = {}
      const metric = {
        constraints: [
          C.TypeConstraint([ 'some-event' ]),
          C.RateConstraint({ period: Period.days(1) })
        ]
      }

      const subject = Adapter.create([ metric ])
      const event = { name: 'some-event' }
      const rateConstraint = subject.metrics[0].constraints[1]

      sinon.spy(rateConstraint.hooks, 'shouldConsumeEvent')

      const withFirstEvent = reduce(subject, [ event ], deps)

      assert.equal(withFirstEvent.events.length, 1)

      assert.calledWithExactly(rateConstraint.hooks.shouldConsumeEvent,
        rateConstraint.state,
        withFirstEvent.events[0].source.event,
        withFirstEvent.events[0].source.data,
        deps
      );

      const withSecondEvent = reduce(withFirstEvent, [event]);

      assert.equal(withSecondEvent.events.length, 0);

      sinon.clock.tick(Period.toMilliseconds(Period.days(1)) + 1)

      const withThirdEventLater = reduce(withSecondEvent, [event]);

      assert.equal(withThirdEventLater.events.length, 1);
    })

    it('steps for all events', function() {
      const metric = {
        constraints: [
          C.TypeConstraint([ 'some-event' ]),
          C.RateConstraint({ period: Period.days(1) })
        ]
      }

      const state = Adapter.create([ metric ])

      const event1 = { name: 'some-event' }
      const event2 = { name: 'some-event' }

      const withFirstBatch = reduce(state, [ event1, event2 ])

      assert.equal(withFirstBatch.events.length, 1)

      const withSecondBatch = reduce(withFirstBatch, [event1, event2]);

      assert.equal(withSecondBatch.events.length, 0);

      sinon.clock.tick(Period.toMilliseconds(Period.days(1)) + 1)

      const withThirdBatchLater = reduce(withSecondBatch, [event1, event2]);

      assert.equal(withThirdBatchLater.events.length, 1);
    })

    it('advances constraints (NullConstraint)', function() {
      const eventA = { name: 'a' }
      const eventB = { name: 'b' }
      const eventC = { name: 'c' }
      const metric = {
        constraints: [
          C.TypeConstraint([ eventA.name, eventB.name ])
        ]
      }
      const initial = Adapter.create([ metric ])

      assert.equal(reduce(initial, [ eventA ]).events.length, 1)
      assert.equal(reduce(initial, [ eventB ]).events.length, 1)
      assert.equal(reduce(initial, [ eventA, eventB ]).events.length, 2)
      assert.equal(reduce(initial, [ eventC ]).events.length, 0)

      const advanced = reduce(initial, [ eventA ]);

      assert.equal(reduce(advanced, [ eventA ]).events.length, 1)
      assert.equal(reduce(advanced, [ eventB ]).events.length, 1)
      assert.equal(reduce(advanced, [ eventA, eventB ]).events.length, 2)
      assert.equal(reduce(advanced, [ eventC ]).events.length, 0)
    })
  })
})