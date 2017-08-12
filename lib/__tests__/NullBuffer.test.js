const { NullBuffer } = require('../')
const { assert } = require('./utils')

describe('scitylana::NullBuffer', function() {
  describe('.allows', function() {
    it('applies to everything', function() {
      assert.ok(NullBuffer.allows(null, null))
    })
  })
})