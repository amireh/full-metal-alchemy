const { BufferedStrategy, Period } = require('../')
const { assert, createSinonSuite } = require('./utils')

describe('scitylana::BufferedStrategy', function() {
  const sinon = createSinonSuite(this);
  const strategy = BufferedStrategy({ period: Period.days(1) });
  const { appliesTo, step } = BufferedStrategy;

  it('is ok if the event has not been tracked yet', function() {
    assert.ok(appliesTo(strategy))
  })

  it('is ok if the event has been tracked but the period has elapsed', function() {
    const withEvent = step(strategy);

    sinon.clock.tick(Period.toMilliseconds(withEvent.period) + 1);

    assert.ok(appliesTo(withEvent))
  })

  it('is false otherwise', function() {
    const withEvent = step(strategy);

    sinon.clock.tick(Period.toMilliseconds(withEvent.period) - 1);

    assert.notOk(appliesTo(withEvent))
  })
})