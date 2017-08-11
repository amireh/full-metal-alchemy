const invariant = require('invariant')
const Period = require('./Period')

const BufferedStrategy = ({ period }) => {
  invariant(Period.isPeriod(period), `"period" must be a valid period.`);

  return {
    type: 'BufferedStrategy',
    period,
    state: {
      lastTrackedAt: null
    }
  }
}

BufferedStrategy.from = ({ period, lastTrackedAt }) => Object.assign(BufferedStrategy({ period }), {
  state: {
    lastTrackedAt
  }
})

BufferedStrategy.appliesTo = (strategy) => {
  return (
    !strategy.state.lastTrackedAt ||
    Period.hasElapsed(strategy.period, strategy.state.lastTrackedAt)
  );
}

BufferedStrategy.step = strategy => BufferedStrategy.from({
  period: strategy.period,
  lastTrackedAt: new Date()
})

module.exports = BufferedStrategy