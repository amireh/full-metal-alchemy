const AnyEventSequence = require('../AnyEventSequence')
const { assert } = require('./utils')
const { appliesTo, step } = AnyEventSequence;

describe('scitylana::AnyEventSequence', function() {
  const seq = AnyEventSequence([ 'foo', 'bar' ]);

  describe('.appliesTo', function() {
    it('is true if the event name is in the list', function() {
      assert.ok(appliesTo(seq, { name: 'foo' }))
      assert.ok(appliesTo(seq, { name: 'bar' }))
      assert.notOk(appliesTo(seq, { name: 'baz' }))
    })
  })

  describe('.step', function() {
    it('is a no-op', function() {
      assert.equal(seq, step(seq));
    })
  })
})
