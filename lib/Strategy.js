const Strategy = exports;
const invariant = require('invariant')
const GranularStrategy = require('./GranularStrategy')
const BufferedStrategy = require('./BufferedStrategy')

Strategy.appliesTo = (strategy, event, data) => {
  switch (strategy.type) {
    case 'GranularStrategy':
      return GranularStrategy.appliesTo(strategy, event, data)

    case 'BufferedStrategy':
      return BufferedStrategy.appliesTo(strategy, event, data)

    default:
      invariant(false, `Unknown strategy "${strategy.type}"`)
  }
}

Strategy.step = (strategy, event, data) => {
  switch (strategy.type) {
    case 'GranularStrategy':
      return GranularStrategy.step(strategy, event, data)

    case 'BufferedStrategy':
      return BufferedStrategy.step(strategy, event, data)

    default:
      invariant(false, `Unknown strategy "${strategy.type}"`)
  }
}

module.exports = Strategy;