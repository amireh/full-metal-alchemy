const { GranularStrategy } = require('../')
const { assert } = require('./utils')

describe('scitylana::GranularStrategy', function() {
  describe('.appliesTo', function() {
    it('applies to everything', function() {
      assert.ok(GranularStrategy.appliesTo(null, null))
    })
  })
})