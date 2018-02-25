const {
  Period,
  RateConstraint,
  Tuple,
  TypeConstraint,
  refine,
  createState
} = require('../')

const { assert, createSinonSuite } = require('./utils')

describe('FMA', function() {
  const sinon = createSinonSuite(this);

  describe('.create', function() {
    it('works', function() {
      createState();
    })

    it('creates data points', function() {
      const subject = createState([{ dataPoints: [ 'foo' ] }])

      assert.ok(typeof subject.metrics[0].dataPoints[0] === 'object')
      assert.include(subject.metrics[0].dataPoints[0], { name: 'foo' })
    })

    it('creates an implicit TypeConstraint if "events" is defined', function() {
      const subject = createState([{
        events: [ 'foo' ]
      }])

      assert.ok(refine(subject, [{ name: 'foo' }]).points.length)
      assert.notOk(refine(subject, [{ name: 'bar' }]).points.length)
    })
  })

  describe('.refine', function() {
    it('works', function() {
      const state = createState([
        {
          name: 'Metric',
          constraints: [
            TypeConstraint([
              'something-happened'
            ])
          ]
        }
      ]);

      const nextState = refine(state, [
        { name: 'something-happened', data: {} }
      ])

      assert.equal(nextState.points.length, 1);
      assert.include(nextState.points[0], {
        name: 'Metric'
      })
    })

    it('serializes data points', function() {
      const state = createState([
        {
          name: 'Metric',
          dataPoints: [ 'what' ],
          constraints: [
            TypeConstraint([ 'something-happened' ])
          ]
        }
      ]);

      const { points } = refine(state, [
        {
          name: 'something-happened',
          data: {
            what: 'foo'
          }
        }
      ])

      assert.include(points[0].data, {
        'what': 'foo'
      })
    })

    it('advances constraints', function() {
      const context = {}
      const metric = {
        constraints: [
          TypeConstraint([ 'some-event' ]),
          RateConstraint({ period: Period.days(1) })
        ]
      }

      const subject = createState([ metric ])
      const event = { name: 'some-event' }
      const rateConstraint = subject.metrics[0].constraints[1]

      sinon.spy(rateConstraint.hooks, 'shouldConsumeEvent')

      const withFirstEvent = refine(subject, [ event ], context)

      assert.equal(withFirstEvent.points.length, 1)

      assert.calledWithExactly(rateConstraint.hooks.shouldConsumeEvent,
        rateConstraint.state,
        withFirstEvent.points[0].source.event,
        withFirstEvent.points[0].source.data,
        context
      );

      const withSecondEvent = refine(withFirstEvent, [event]);

      assert.equal(withSecondEvent.points.length, 0);

      sinon.clock.tick(Period.toMilliseconds(Period.days(1)) + 1)

      const withThirdEventLater = refine(withSecondEvent, [event]);

      assert.equal(withThirdEventLater.points.length, 1);
    })

    it('advances constraints for all events', function() {
      const metric = {
        constraints: [
          TypeConstraint([ 'some-event' ]),
          RateConstraint({ period: Period.days(1) })
        ]
      }

      const state = createState([ metric ])

      const event1 = { name: 'some-event' }
      const event2 = { name: 'some-event' }

      const withFirstBatch = refine(state, [ event1, event2 ])

      assert.equal(withFirstBatch.points.length, 1)

      const withSecondBatch = refine(withFirstBatch, [event1, event2]);

      assert.equal(withSecondBatch.points.length, 0);

      sinon.clock.tick(Period.toMilliseconds(Period.days(1)) + 1)

      const withThirdBatchLater = refine(withSecondBatch, [event1, event2]);

      assert.equal(withThirdBatchLater.points.length, 1);
    })

    it('advances constraints (NullConstraint)', function() {
      const eventA = { name: 'a' }
      const eventB = { name: 'b' }
      const eventC = { name: 'c' }
      const metric = {
        constraints: [
          TypeConstraint([ eventA.name, eventB.name ])
        ]
      }
      const initial = createState([ metric ])

      assert.equal(refine(initial, [ eventA ]).points.length, 1)
      assert.equal(refine(initial, [ eventB ]).points.length, 1)
      assert.equal(refine(initial, [ eventA, eventB ]).points.length, 2)
      assert.equal(refine(initial, [ eventC ]).points.length, 0)

      const advanced = refine(initial, [ eventA ]);

      assert.equal(refine(advanced, [ eventA ]).points.length, 1)
      assert.equal(refine(advanced, [ eventB ]).points.length, 1)
      assert.equal(refine(advanced, [ eventA, eventB ]).points.length, 2)
      assert.equal(refine(advanced, [ eventC ]).points.length, 0)
    })

    it('advances the context when a Tuple is yielded in "eventWasConsumed"', function() {
      const initial = createState([
        {
          name: 'some metric',
          constraints: [
            {
              getInitialState: () => 0,
              eventWasConsumed: (state, e, data, ctx) => {
                return Tuple.of(state + 1, ctx + 1)
              }
            }
          ]
        }
      ])

      assert.equal(refine(initial, [{ name: 'a' }], 0).context, 1)
    })
  })
})