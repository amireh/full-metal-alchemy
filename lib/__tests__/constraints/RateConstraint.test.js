const RateConstraint = require('../../constraints/RateConstraint')
const { assert, createSinonSuite } = require('../utils')
const { Period } = require('../../')

describe('constraints::RateConstraint', function() {
  const sinon = createSinonSuite(this);
  const constraint = RateConstraint({ period: Period.days(1) });
  const state = constraint.getInitialState()
  const { shouldProducePoint, pointWasProduced } = constraint

  it('is ok if the event has not been submitted yet', function() {
    assert.ok(shouldProducePoint(state))
  })

  it('is ok if the event has been submitted but the period has elapsed', function() {
    const withEvent = pointWasProduced(state);

    sinon.clock.tick(Period.toMilliseconds(withEvent.period) + 1);

    assert.ok(shouldProducePoint(withEvent))
  })

  it('is false otherwise', function() {
    const withEvent = pointWasProduced(state);

    sinon.clock.tick(Period.toMilliseconds(withEvent.period) - 1);

    assert.notOk(shouldProducePoint(withEvent))
  })
})
