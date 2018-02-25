const invariant = require('invariant')
const Period = require('../Period')
const { set } = require('../algorithm')

// TODO: accept custom serializer?
const generateBucketKey = data => JSON.stringify(data);

/**
 * @module ParametricRateConstraint
 *
 * Like [[./RateConstraint.js]], throttle a point from being produced more than
 * once during a certain period but **for any specific data set**.
 *
 * If the events differ in data, each data set is tracked in a separate time
 * buffer.
 *
 * @param {Object} config
 * @param {Period} config.period
 * @param {function(Object): String} config.serializeFn
 *        Implement this if the event data can not be serialized as JSON.
 *
 * @return {Constraint}
 */
module.exports = ({ period, serializeFn = generateBucketKey }) => {
  invariant(Period.isPeriod(period), `"period" must be a valid period.`);

  return {
    name: `ParametricRateConstraint(${Period.toMilliseconds(period)}ms)`,

    getInitialState() {
      return {
        /*
         * @property {Period}
         * @private
         */
        period,

        /*
         * @property {Object.<String, Date>}
         * @private
         */
        buckets: {},
      }
    },

    shouldConsumeEvent: () => true,

    eventWasConsumed: (state) => {
      return state
    },

    shouldProducePoint: (state, event, data) => {
      const bucketKey = serializeFn(data);

      if (!state.buckets.hasOwnProperty(bucketKey)) {
        return true;
      }
      else {
        return Period.hasElapsed(state.period, state.buckets[bucketKey])
      }
    },

    pointWasProduced: (state, event, data) => {
      const bucketKey = serializeFn(data);

      return set(state, {
        buckets: set(state.buckets, {
          [bucketKey]: new Date()
        })
      })
    }
  }
}
