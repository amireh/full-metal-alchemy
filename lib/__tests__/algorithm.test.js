const { assert } = require('./utils')
const { getIn } = require("../algorithm");

describe("algorithm::getIn", function() {
  it('retrieves a root item', function() {
    assert.equal(getIn('foo', { foo: 1 }), 1)
    assert.equal(getIn('bar', { foo: 1 }), undefined)
  })

  it('retrieves a nested item', function() {
    assert.equal(getIn([ 'foo' ], { foo: 1 }), 1)
    assert.equal(getIn([ 'a', 'b' ], { a: { b: 1 } }), 1)
    assert.equal(getIn([ 'a', 'b', 'c' ], {}), undefined)
  })
})
