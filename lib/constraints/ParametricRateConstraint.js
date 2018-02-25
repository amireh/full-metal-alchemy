const invariant = require('invariant')
const Period = require('../Period')
const { set } = require('../algorithm')

const generateBucketKey = data => JSON.stringify(data);

/**
 * @module ParametricRateConstraint
 *
 * Like [[./RateConstraint.js]], throttle a point from being produced more than
 * once during a certain period but **for any specific data set**.
 *
 * If the events differ in data, each data set is tracked in a separate time
 * bucket.
 *
 * @param {Object} config
 * @param {Period} config.period
 * @param {function(Object): String} config.serializeFn
 *        Implement this if the event data can not be serialized as JSON.
 *
 * @param {Boolean} [config.useContext=false]
 *        Use the context along with the data to identify buckets.
 *
 * @return {Constraint}
 */
module.exports = ({ period, serializeFn = generateBucketKey, useContext = false }) => {
  invariant(Period.isPeriod(period), `"period" must be a valid period.`);

  return {
    name: `ParametricRateConstraint(${Period.toMilliseconds(period)}ms)`,

    getInitialState() {
      return {
        period,
        buckets: {},
      }
    },

    shouldProducePoint: (state, event, data, context) => {
      const bucketKey = useContext ? serializeFn([data,context]) : serializeFn(data);

      if (!state.buckets.hasOwnProperty(bucketKey)) {
        return true;
      }
      else {
        return Period.hasElapsed(state.period, state.buckets[bucketKey])
      }
    },

    pointWasProduced: (state, event, data, context) => {
      const bucketKey = useContext ? serializeFn([data,context]) : serializeFn(data);

      return set(state, {
        buckets: set(state.buckets, {
          [bucketKey]: new Date()
        })
      })
    }
  }
}
