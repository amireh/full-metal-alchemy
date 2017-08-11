const { assert } = require('chai');
const sinon = require('sinon');

sinon.assert.expose(assert, { prefix: "" });
sinon.config = {
  useFakeServer: false,
  useFakeTimers: true,
};

exports.assert = assert;
exports.createSinonSuite = createSinonSuite;

function createSinonSuite(mochaSuite, options = {}) {
  let api = {};
  let sandbox;

  mochaSuite.beforeEach(function() {
    sandbox = sinon.sandbox.create({
      injectInto: api,
      properties: [ 'stub', 'spy', 'match', 'clock' ],
      useFakeServer: false,
      useFakeTimers: true,
    });
  });

  if (options.autoRestore === false) {
    api.restore = function() {
      sandbox.restore();
    };
  }
  else {
    mochaSuite.afterEach(function() {
      sandbox.restore();
    });
  }

  return api;
}
