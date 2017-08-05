const Strategy = exports;
const invariant = require('invariant')
const GranularStrategy = require('./GranularStrategy')

Strategy.appliesTo = (strategy, event) => {
  switch (strategy.type) {
    case 'GranularStrategy':
      return GranularStrategy.appliesTo(strategy, event)

    default:
      invariant(false, `Unknown strategy "${strategy.type}"`)
  }
}

module.exports = Strategy;