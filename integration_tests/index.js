const DSL = require('./dsl')
const { createSinonSuite } = require('../lib/__tests__/utils')
const flatten = x => x.reduce((list, y) => list.concat(y), [])
const specs = flatten([
  require('./buffering'),
  require('./data-point-boolean-coercion'),
  require('./data-point-context'),
  require('./data-point-custom-reduction'),
  require('./data-point-extraction'),
  require('./data-point-fixed-value'),
  require('./sequential-constraint'),
  require('./sequential-time-buffered'),
  require('./parametric-buffering'),
].map(x => x(DSL.t)))

describe('scitylana::integration', function() {
  const sinon = createSinonSuite(this);

  specs.forEach(function(spec) {
    const fn = spec.only ? it.only : it;
    fn(spec.name, DSL.createTest({ spec, sinon }))
  })
})