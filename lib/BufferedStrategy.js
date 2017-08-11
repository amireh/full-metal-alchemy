const invariant = require('invariant')
const Period = require('./Period')
const Never = {}

const BufferedStrategy = ({ period }) => {
  invariant(Period.isPeriod(period), `"period" must be a valid period.`);

  return {
    type: 'BufferedStrategy',
    period,
    lastTrackedAt: Never
  }
}

/**
 * @private
 *
 * Clone a strategy instance with modified properties.
 *
 * @param {BufferedStrategy} source
 * @param {Object} properties
 * @param {Date} properties.lastTrackedAt
 *
 * @return {BufferedStrategy}
 */
BufferedStrategy.set = (source, properties) => Object.assign(
  BufferedStrategy({ period: source.period }),
  properties
)

/** @private */
BufferedStrategy.appliesTo = strategy => {
  return (
    strategy.lastTrackedAt === Never ||
    Period.hasElapsed(strategy.period, strategy.lastTrackedAt)
  );
}

/** @private */
BufferedStrategy.step = strategy => BufferedStrategy.set(strategy, {
  lastTrackedAt: new Date()
})

module.exports = BufferedStrategy