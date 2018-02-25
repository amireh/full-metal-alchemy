const ParametricRateConstraint = require('../../constraints/ParametricRateConstraint')
const { assert, createSinonSuite } = require('../utils')
const { Period } = require('../../')

describe('constraints::ParametricRateConstraint', function() {
  const sinon = createSinonSuite(this);
  const constraint = ParametricRateConstraint({ period: Period.days(1) });
  const state = constraint.getInitialState()
  const { shouldProducePoint, pointWasProduced } = constraint
  const event = {};
  const data1 = [ true ];
  const data2 = [ false ];

  context('when the event with that data has not been tracked yet...', function() {
    it('is ok', function() {
      assert.ok(shouldProducePoint(state, event, data1))
    })
  })

  context('when the event has been tracked...', function() {
    const withData1 = pointWasProduced(state, event, data1);

    it('is ok if the data differs', function() {
      assert.ok(
        shouldProducePoint(withData1, event, data2)
      )
    });

    it('is false otherwise', function() {
      assert.notOk(shouldProducePoint(withData1, event, data1))
    });
  })

  context('when the event has been tracked and context is significant...', function() {
    const context1 = { a: '1' }
    const context2 = { a: '2' }
    const thisConstraint = ParametricRateConstraint({
      period: Period.days(1),
      useContext: true
    });
    const thisState = thisConstraint.getInitialState()
    const withData1 = thisConstraint.pointWasProduced(thisState, event, data1, context1);

    it('is ok if the context differs', function() {
      assert.ok(thisConstraint.shouldProducePoint(withData1, event, data1, context2))
    });

    it('is false otherwise', function() {
      assert.notOk(thisConstraint.shouldProducePoint(withData1, event, data1, context1))
    });
  })

  context('when the event has been tracked and the period has elapsed...', function() {
    it('is ok', function() {
      assert.ok(shouldProducePoint(state, event, data1))

      const withEvent = pointWasProduced(state, event, data1);

      sinon.clock.tick(Period.toMilliseconds(state.period) + 1);

      assert.ok(shouldProducePoint(withEvent, event, data1))
    })
  })

  it('maintains a timer for each bucket', function() {
    const withFirstEvent = pointWasProduced(state, event, data1);

    sinon.clock.tick(1000);

    assert.ok(shouldProducePoint(withFirstEvent, event, data2));

    const withSecondEvent = pointWasProduced(withFirstEvent, event, data2);

    sinon.clock.tick(Period.toMilliseconds(state.period) + 1 - 1000)

    assert.ok(shouldProducePoint(withSecondEvent, event, data1));
    assert.notOk(shouldProducePoint(withSecondEvent, event, data2));
  })
})
