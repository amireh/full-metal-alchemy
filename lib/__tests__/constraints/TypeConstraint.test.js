const TypeConstraint = require('../../constraints/TypeConstraint')
const { assert } = require('../utils')

describe('scitylana::constraints::TypeConstraint', function() {
  const cnr = TypeConstraint([ 'foo', 'bar' ]);

  describe('.shouldConsumeEvent', function() {
    it('is true if the event name is in the list', function() {
      const state = cnr.getInitialState()

      assert.ok(cnr.shouldConsumeEvent(state, { name: 'foo' }))
      assert.ok(cnr.shouldConsumeEvent(state, { name: 'bar' }))
      assert.notOk(cnr.shouldConsumeEvent(state, { name: 'baz' }))
    })
  })
})
