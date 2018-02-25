const ProximityConstraint = require('../../constraints/ProximityConstraint')
const { assert, createSinonSuite } = require('../utils')
const { Period } = require('../../')

describe('constraints::ProximityConstraint', function() {
  const sinon = createSinonSuite(this);
  const constraint = ProximityConstraint({
    period: Period.seconds(5)
  });
  const state = constraint.getInitialState()
  const {
    shouldConsumeEvent,
    eventWasConsumed,
    pointWasProduced,
  } = constraint

  it('is ok if the event has not been submitted yet', function() {
    assert.ok(shouldConsumeEvent(state))
  })

  it('is ok if the event has been re-triggered before the period elapses', function() {
    const withEvent = eventWasConsumed(state);

    sinon.clock.tick(Period.toMilliseconds(Period.seconds(4)));

    assert.ok(shouldConsumeEvent(withEvent))
  })

  it('is false otherwise', function() {
    const withEvent = eventWasConsumed(state);

    sinon.clock.tick(Period.toMilliseconds(Period.seconds(6)));

    assert.notOk(shouldConsumeEvent(withEvent))
  })

  it('resets upon production', function() {
    const withEvent = eventWasConsumed(state);

    sinon.clock.tick(Period.toMilliseconds(Period.seconds(4)));

    assert.ok(shouldConsumeEvent(withEvent))

    const atStartAgain = pointWasProduced(withEvent)

    assert.ok(shouldConsumeEvent(atStartAgain))
  })
})
