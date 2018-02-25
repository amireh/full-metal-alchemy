const StrictOrderConstraint = require('../../constraints/StrictOrderConstraint')
const { assert, pipe } = require('../utils')

describe('constraints::StrictOrderConstraint', function() {
  const constraint = StrictOrderConstraint([ 'foo', 'bar', 'baz' ]);
  const state = constraint.getInitialState()
  const { eventWasConsumed, shouldConsumeEvent, shouldProducePoint } = constraint

  describe('.shouldConsumeEvent', function() {
    it('is true regardless of the event', function() {
      assert.ok(shouldConsumeEvent(state, { name: 'foo' }))
      assert.ok(shouldConsumeEvent(state, { name: 'huhu' }))
    })
  })

  describe('.eventWasConsumed', function() {
    it('works as a no-constraint if the sequence has only one event', function() {
      const thisConstraint = StrictOrderConstraint([ 'foo' ]);
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

    it('resets the cursor if the event is out of order', function() {
      pipe([
        initial => {
          return eventWasConsumed(initial, { name: 'foo' })
        },

        afterFirst => {
          assert.notOk(shouldProducePoint(afterFirst))

          return eventWasConsumed(afterFirst, { name: 'baz' });
        },

        afterThirdWithoutSecond => {
          assert.notOk(shouldProducePoint(afterThirdWithoutSecond))

          const afterFirst = eventWasConsumed(afterThirdWithoutSecond, { name: 'foo' })
          const afterSecond = eventWasConsumed(afterFirst, { name: 'bar' })
          const afterThird = eventWasConsumed(afterSecond, { name: 'baz' })

          assert.ok(shouldProducePoint(afterThird))
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
