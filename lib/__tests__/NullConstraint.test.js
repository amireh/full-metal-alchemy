const NullConstraint = require('../NullConstraint')
const { assert } = require('./utils')
const { appliesTo, consume } = NullConstraint;

describe('scitylana::NullConstraint', function() {
  const seq = NullConstraint([ 'foo', 'bar' ]);

  describe('.appliesTo', function() {
    it('is true if the event name is in the list', function() {
      assert.ok(appliesTo(seq, { name: 'foo' }))
      assert.ok(appliesTo(seq, { name: 'bar' }))
      assert.notOk(appliesTo(seq, { name: 'baz' }))
    })
  })

  describe('.consume', function() {
    it('is a no-op', function() {
      assert.equal(seq, consume(seq));
    })
  })
})
