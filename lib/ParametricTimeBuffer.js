const invariant = require('invariant')
const Period = require('./Period')
const { set } = require('./algorithm')

// TODO: accept custom serializer?
const generateBucketKey = data => JSON.stringify(data);

/**
 * @module
 */
const ParametricTimeBuffer = ({ period }) => {
  invariant(Period.isPeriod(period), `"period" must be a valid period.`);

  return {
    type: 'ParametricTimeBuffer',

    /**
     * @property {Period}
     * @private
     */
    period,

    /**
     * @property {Object.<String, Date>}
     * @private
     */
    buckets: {},
  }
}

/** @private */
ParametricTimeBuffer.set = (source, properties) => set(
  ParametricTimeBuffer({ period: source.period, }),
  properties
)

/** @private */
ParametricTimeBuffer.allows = (buffer, event, data) => {
  const bucketKey = generateBucketKey(data);

  if (!buffer.buckets.hasOwnProperty(bucketKey)) {
    return true;
  }
  else {
    return Period.hasElapsed(buffer.period, buffer.buckets[bucketKey])
  }
}

/** @private */
ParametricTimeBuffer.step = (buffer, event, data) => {
  const bucketKey = generateBucketKey(data);

  return ParametricTimeBuffer.set(buffer, {
    buckets: set(buffer.buckets, {
      [bucketKey]: new Date()
    })
  })
}

ParametricTimeBuffer.type = 'ParametricTimeBuffer'

module.exports = ParametricTimeBuffer