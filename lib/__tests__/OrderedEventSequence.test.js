const OrderedEventSequence = require('../OrderedEventSequence')
const { assert } = require('./utils')
const { appliesTo, step } = OrderedEventSequence;

describe('scitylana::OrderedEventSequence', function() {
  const seq = OrderedEventSequence([ 'foo', 'bar' ]);

  describe('.appliesTo', function() {
    it('is true if the event is the next in the list', function() {
      assert.ok(appliesTo(seq, { name: 'foo' }))
      assert.notOk(appliesTo(seq, { name: 'bar' }))
    })

    it('is false if the event is not in the list at all', function() {
      assert.notOk(appliesTo(seq, { name: 'baz' }))
    })
  })

  describe('.step', function() {
    it('advances the cursor', function() {
      assert.ok(appliesTo(seq, { name: 'foo' }))

      const nextSeq = step(seq)

      assert.notOk(appliesTo(nextSeq, { name: 'foo' }))
      assert.ok(appliesTo(nextSeq, { name: 'bar' }))
    })

    it('resets the cursor upon completion of the list', function() {
      assert.ok(appliesTo(seq, { name: 'foo' }))

      const atBar = step(seq)

      assert.notOk(appliesTo(atBar, { name: 'foo' }))
      assert.ok(appliesTo(atBar, { name: 'bar' }))

      const atFooAgain = step(atBar)

      assert.ok(appliesTo(atFooAgain, { name: 'foo' }))
      assert.notOk(appliesTo(atFooAgain, { name: 'bar' }))
    })
  })
})