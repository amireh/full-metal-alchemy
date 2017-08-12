const { TimeBuffer, Period } = require('../')
const { assert, createSinonSuite } = require('./utils')

describe('scitylana::TimeBuffer', function() {
  const sinon = createSinonSuite(this);
  const buffer = TimeBuffer({ period: Period.days(1) });
  const { allows, step } = TimeBuffer;

  it('is ok if the event has not been tracked yet', function() {
    assert.ok(allows(buffer))
  })

  it('is ok if the event has been tracked but the period has elapsed', function() {
    const withEvent = step(buffer);

    sinon.clock.tick(Period.toMilliseconds(withEvent.period) + 1);

    assert.ok(allows(withEvent))
  })

  it('is false otherwise', function() {
    const withEvent = step(buffer);

    sinon.clock.tick(Period.toMilliseconds(withEvent.period) - 1);

    assert.notOk(allows(withEvent))
  })
})