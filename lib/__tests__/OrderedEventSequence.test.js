const OrderedEventSequence = require('../OrderedEventSequence')
const { assert } = require('./utils')
const { appliesTo, fulfilled, step } = OrderedEventSequence;

describe('scitylana::OrderedEventSequence', function() {
  const seq = OrderedEventSequence([ 'foo', 'bar' ]);

  describe('.appliesTo', function() {
    it('is true if the event is in the list', function() {
      assert.ok(appliesTo(seq, { name: 'foo' }))
      assert.ok(appliesTo(seq, { name: 'bar' }))
    })

    it('is false if the event is not in the list at all', function() {
      assert.notOk(appliesTo(seq, { name: 'baz' }))
    })
  })

  describe('.step', function() {
    it('advances the cursor', function() {
      assert.notOk(fulfilled(seq))
      const atSecond = step(seq, { name: 'foo' })

      assert.notOk(fulfilled(atSecond))

      const atEnd = step(atSecond, { name: 'bar' });

      assert.ok(fulfilled(atEnd))
    })

    it('resets the cursor upon completion of the list', function() {
      assert.notOk(fulfilled(seq))

      const atSecond = step(seq, { name: 'foo' })

      assert.notOk(fulfilled(atSecond))

      const atEnd = step(atSecond, { name: 'bar' });

      assert.ok(fulfilled(atEnd))

      const atStartAgain = step(atEnd, { name: 'foo' })

      assert.notOk(fulfilled(atStartAgain))
    })
  })
})