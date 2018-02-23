const OrderConstraint = require('../../constraints/OrderConstraint')
const { assert, pipe } = require('../utils')

describe('scitylana::constraints::OrderConstraint', function() {
  const constraint = OrderConstraint([ 'foo', 'bar', 'baz' ]);
  const state = constraint.getInitialState()
  const { eventWasConsumed, shouldConsumeEvent, shouldProducePoint } = constraint

  describe('.shouldConsumeEvent', function() {
    it('is true if the event is in the list', function() {
      assert.ok(shouldConsumeEvent(state, { name: 'foo' }))
      assert.ok(shouldConsumeEvent(state, { name: 'bar' }))
    })

    it('is false if the event is not in the list at all', function() {
      assert.notOk(shouldConsumeEvent(state, { name: 'huhu' }))
    })
  })

  describe('.eventWasConsumed', function() {
    it('works if the sequence is empty', function() {
      const thisConstraint = OrderConstraint([]);
      const thisState = thisConstraint.getInitialState()

      assert.notOk(shouldConsumeEvent(thisState, { name: 'foo' }))
    })

    it('works as a no-constraint if the sequence has only one event', function() {
      const thisConstraint = OrderConstraint([ 'foo' ]);
      const thisState = thisConstraint.getInitialState()

      assert.ok(shouldConsumeEvent(thisState, { name: 'foo' }))

      const consumed = eventWasConsumed(thisState, { name: 'foo' })

      assert.ok(shouldConsumeEvent(consumed, { name: 'foo' }))
    })

    it('advances the cursor', function() {
      pipe([
        () => {
          assert.notOk(shouldProducePoint(state))

          return eventWasConsumed(state, { name: 'foo' })
        },

        afterFirst => {
          assert.notOk(shouldProducePoint(afterFirst))

          return eventWasConsumed(afterFirst, { name: 'bar' });
        },

        afterSecond => {
          assert.notOk(shouldProducePoint(afterSecond))

          return eventWasConsumed(afterSecond, { name: 'baz' });
        },

        afterThird => {
          assert.ok(shouldProducePoint(afterThird))
        }
      ])()
    })

    it('does not advance the cursor if the event is out of order', function() {
      pipe([
        initial => {
          assert.notOk(shouldProducePoint(initial))

          return eventWasConsumed(initial, { name: 'foo' })
        },

        afterFirst => {
          assert.notOk(shouldProducePoint(afterFirst))

          return eventWasConsumed(afterFirst, { name: 'baz' });
        },

        afterThirdWithoutSecond => {
          assert.notOk(shouldProducePoint(afterThirdWithoutSecond))
        }
      ])(state)
    })

    it('resets the cursor upon completion of the list', function() {
      pipe([
        () => {
          assert.notOk(shouldProducePoint(state))
          return eventWasConsumed(state, { name: 'foo' })
        },

        afterFirst => {
          assert.notOk(shouldProducePoint(afterFirst))
          return eventWasConsumed(afterFirst, { name: 'bar' });
        },

        afterSecond => {
          assert.notOk(shouldProducePoint(afterSecond))

          return eventWasConsumed(afterSecond, { name: 'baz' })
        },

        afterThird => {
          assert.ok(shouldProducePoint(afterThird))
        }
      ])()
    })
  })
})
