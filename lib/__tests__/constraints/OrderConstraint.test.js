const OrderConstraint = require('../../constraints/OrderConstraint')
const { assert } = require('../utils')

describe('scitylana::constraints::OrderConstraint', function() {
  const constraint = OrderConstraint([ 'foo', 'bar' ]);
  const state = constraint.getInitialState()
  const { eventWasConsumed, shouldConsumeEvent, shouldProducePoint } = constraint

  describe('.shouldConsumeEvent', function() {
    it('is true if the event is in the list', function() {
      assert.ok(shouldConsumeEvent(state, { name: 'foo' }))
      assert.ok(shouldConsumeEvent(state, { name: 'bar' }))
    })

    it('is false if the event is not in the list at all', function() {
      assert.notOk(shouldConsumeEvent(state, { name: 'baz' }))
    })
  })

  describe('.eventWasConsumed', function() {
    it('advances the cursor', function() {
      assert.notOk(shouldProducePoint(state))

      const atSecond = eventWasConsumed(state, { name: 'foo' })

      assert.notOk(shouldProducePoint(atSecond))

      const atEnd = eventWasConsumed(atSecond, { name: 'bar' });

      assert.ok(shouldProducePoint(atEnd))
    })

    it('resets the cursor upon completion of the list', function() {
      assert.notOk(shouldProducePoint(state))

      const atSecond = eventWasConsumed(state, { name: 'foo' })

      assert.notOk(shouldProducePoint(atSecond))

      const atEnd = eventWasConsumed(atSecond, { name: 'bar' });

      assert.ok(shouldProducePoint(atEnd))

      const atStartAgain = eventWasConsumed(atEnd, { name: 'foo' })

      assert.notOk(shouldProducePoint(atStartAgain))
    })
  })
})
