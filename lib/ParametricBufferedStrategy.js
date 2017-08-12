const invariant = require('invariant')
const Period = require('./Period')
const { set } = require('./algorithm')

// TODO: accept custom serializer?
const generateBucketKey = data => JSON.stringify(data);

const ParametricBufferedStrategy = ({ period }) => {
  invariant(Period.isPeriod(period), `"period" must be a valid period.`);

  return {
    type: 'ParametricBufferedStrategy',

    /** @type {Period} */
    period,

    /** @type {Object.<String, Date>} */
    buckets: {},
  }
}

/**
 * @private
 *
 * Clone a strategy instance with modified properties.
 *
 * @param {ParametricBufferedStrategy} source
 * @param {Object} properties
 * @param {Object} properties.buckets
 *
 * @return {ParametricBufferedStrategy}
 */
ParametricBufferedStrategy.set = (source, properties) => set(
  ParametricBufferedStrategy({ period: source.period, }),
  properties
)

/** @private */
ParametricBufferedStrategy.appliesTo = (strategy, event, data) => {
  const bucketKey = generateBucketKey(data);

  if (!strategy.buckets.hasOwnProperty(bucketKey)) {
    return true;
  }
  else {
    return Period.hasElapsed(strategy.period, strategy.buckets[bucketKey])
  }
}

/** @private */
ParametricBufferedStrategy.step = (strategy, event, data) => {
  const bucketKey = generateBucketKey(data);

  return ParametricBufferedStrategy.set(strategy, {
    buckets: set(strategy.buckets, {
      [bucketKey]: new Date()
    })
  })
}

ParametricBufferedStrategy.type = 'ParametricBufferedStrategy'

module.exports = ParametricBufferedStrategy