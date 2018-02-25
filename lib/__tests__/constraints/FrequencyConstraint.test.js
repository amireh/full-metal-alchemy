const FrequencyConstraint = require('../../constraints/FrequencyConstraint')
const { assert } = require('../utils')

describe('constraints::FrequencyConstraint', function() {
  const constraint = FrequencyConstraint(3);
  const state = constraint.getInitialState()
  const {
    eventWasConsumed,
    shouldProducePoint,
  } = constraint

  it('produces a point only once the event has been triggered enough times', function() {
    assert.notOk(shouldProducePoint(state))

    const afterFirst = eventWasConsumed(state, { name: 'a' })

    assert.notOk(shouldProducePoint(afterFirst))

    const afterSecond = eventWasConsumed(afterFirst, { name: 'a' })

    assert.notOk(shouldProducePoint(afterSecond))

    const afterThird = eventWasConsumed(afterSecond, { name: 'a' })

    assert.ok(shouldProducePoint(afterThird))
  })

  it('resets upon production', function() {
    assert.notOk(shouldProducePoint(state))

    const afterFirst = eventWasConsumed(state, { name: 'a' })

    assert.notOk(shouldProducePoint(afterFirst))

    const afterSecond = eventWasConsumed(afterFirst, { name: 'a' })

    assert.notOk(shouldProducePoint(afterSecond))

    const afterThird = eventWasConsumed(afterSecond, { name: 'a' })

    assert.ok(shouldProducePoint(afterThird))

    const afterFourth = eventWasConsumed(afterThird, { name: 'a' })

    assert.notOk(shouldProducePoint(afterFourth))
  })
})
