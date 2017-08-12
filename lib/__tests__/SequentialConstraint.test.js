const SequentialConstraint = require('../SequentialConstraint')
const { assert } = require('./utils')
const { appliesTo, fulfilled, consume } = SequentialConstraint;

describe('scitylana::SequentialConstraint', function() {
  const seq = SequentialConstraint([ 'foo', 'bar' ]);

  describe('.appliesTo', function() {
    it('is true if the event is in the list', function() {
      assert.ok(appliesTo(seq, { name: 'foo' }))
      assert.ok(appliesTo(seq, { name: 'bar' }))
    })

    it('is false if the event is not in the list at all', function() {
      assert.notOk(appliesTo(seq, { name: 'baz' }))
    })
  })

  describe('.consume', function() {
    it('advances the cursor', function() {
      assert.notOk(fulfilled(seq))
      const atSecond = consume(seq, { name: 'foo' })

      assert.notOk(fulfilled(atSecond))

      const atEnd = consume(atSecond, { name: 'bar' });

      assert.ok(fulfilled(atEnd))
    })

    it('resets the cursor upon completion of the list', function() {
      assert.notOk(fulfilled(seq))

      const atSecond = consume(seq, { name: 'foo' })

      assert.notOk(fulfilled(atSecond))

      const atEnd = consume(atSecond, { name: 'bar' });

      assert.ok(fulfilled(atEnd))

      const atStartAgain = consume(atEnd, { name: 'foo' })

      assert.notOk(fulfilled(atStartAgain))
    })
  })
})