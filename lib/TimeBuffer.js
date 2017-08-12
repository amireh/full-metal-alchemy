const invariant = require('invariant')
const Period = require('./Period')
const TYPE = 'TimeBuffer'
const Never = {}

/**
 * @module
 */
const TimeBuffer = ({ period }) => {
  invariant(Period.isPeriod(period), `"period" must be a valid period.`);

  return {
    type: TYPE,
    period,
    lastTrackedAt: Never
  }
}

TimeBuffer.type = TYPE

/** @private */
TimeBuffer.set = (source, properties) => Object.assign(
  TimeBuffer({ period: source.period }),
  properties
)

/** @private */
TimeBuffer.allows = buffer => {
  return (
    buffer.lastTrackedAt === Never ||
    Period.hasElapsed(buffer.period, buffer.lastTrackedAt)
  );
}

/** @private */
TimeBuffer.step = buffer => TimeBuffer.set(buffer, {
  lastTrackedAt: new Date()
})

module.exports = TimeBuffer