const { ParametricBufferedStrategy, Period } = require('../')
const { assert, createSinonSuite } = require('./utils')

describe('scitylana::ParametricBufferedStrategy', function() {
  const sinon = createSinonSuite(this);
  const { appliesTo, step } = ParametricBufferedStrategy;
  const createStrategy = ParametricBufferedStrategy;
  const base = createStrategy({ period: Period.days(1) });
  const event = {};
  const data1 = [ true ];
  const data2 = [ false ];

  context('when the event with that data has not been tracked yet...', function() {
    it('is ok', function() {
      assert.ok(appliesTo(base, event, data1))
    })
  })

  context('when the event has been tracked...', function() {
    const withData1 = step(base, event, data1);

    it('is ok if the data differs', function() {
      assert.ok(
        appliesTo(withData1, event, data2)
      )
    });

    it('is false otherwise', function() {
      assert.notOk(appliesTo(withData1, event, data1))
    });
  })

  context('when the event has been tracked and the period has elapsed...', function() {
    it('is ok', function() {
      assert.ok(appliesTo(base, event, data1))

      const withEvent = step(base, event, data1);

      sinon.clock.tick(Period.toMilliseconds(base.period) + 1);

      assert.ok(appliesTo(withEvent, event, data1))
    })
  })

  it('maintains a timer for each bucket', function() {
    const withFirstEvent = step(base, event, data1);

    sinon.clock.tick(1000);

    assert.ok(appliesTo(withFirstEvent, event, data2));

    const withSecondEvent = step(withFirstEvent, event, data2);

    sinon.clock.tick(Period.toMilliseconds(base.period) + 1 - 1000)

    assert.ok(appliesTo(withSecondEvent, event, data1));
    assert.notOk(appliesTo(withSecondEvent, event, data2));
  })
})