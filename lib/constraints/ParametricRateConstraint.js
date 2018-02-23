const invariant = require('invariant')
const Period = require('../Period')
const { set } = require('../algorithm')

// TODO: accept custom serializer?
const generateBucketKey = data => JSON.stringify(data);

module.exports = ({ period }) => {
  invariant(Period.isPeriod(period), `"period" must be a valid period.`);

  return {
    name: `ParametricRateConstraint(${Period.toMilliseconds(period)}ms)`,

    getInitialState() {
      return {
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
    },

    shouldConsumeEvent: () => true,

    eventWasConsumed: (state) => {
      return state
    },

    shouldProducePoint: (state, event, data) => {
      const bucketKey = generateBucketKey(data);

      if (!state.buckets.hasOwnProperty(bucketKey)) {
        return true;
      }
      else {
        return Period.hasElapsed(state.period, state.buckets[bucketKey])
      }
    },

    pointWasProduced: (state, event, data) => {
      const bucketKey = generateBucketKey(data);

      return set(state, {
        buckets: set(state.buckets, {
          [bucketKey]: new Date()
        })
      })
    }
  }
}
