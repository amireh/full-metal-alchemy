const TypeConstraint = require('../../constraints/TypeConstraint')
const { assert } = require('../utils')

describe('constraints::TypeConstraint', function() {
  const cnr = TypeConstraint([ 'foo', 'bar' ]);

  describe('.shouldConsumeEvent', function() {
    it('is true if the event name is in the list', function() {
      assert.ok(cnr.shouldConsumeEvent(null, { name: 'foo' }))
      assert.ok(cnr.shouldConsumeEvent(null, { name: 'bar' }))
      assert.notOk(cnr.shouldConsumeEvent(null, { name: 'baz' }))
    })

    context('given a data checker function', function() {
      it('is true if the checker yields ok', function() {
        const { shouldConsumeEvent } = TypeConstraint([
          { name: 'foo', when: data => data.x === 1 }
        ]);

        assert.notOk(shouldConsumeEvent(null, { name: 'foo' }, {}))
        assert.ok(shouldConsumeEvent(null, { name: 'foo' }, { x: 1 }))
      })
    })
  })
})
