const invariant = require('invariant')
const Period = require('../Period')
const { set } = require('../algorithm')
const Never = {}

/**
 * @module RateConstraint
 *
 * Throttle a point from being produced more than once during a certain period.
 *
 * ```javascript
 * import { Period, RateConstraint, createState, refine } from 'full-metal-alchemy'
 *
 * let metricState = createState([
 *   {
 *     name: 'Products: performed a search',
 *     events: [ 'products/search' ],
 *     constraints: [
 *       RateConstraint({ period: Period.days(1) })
 *     ]
 *   }
 * ])
 *
 * metricState = refine(metricState, [{ name: 'products/search' }])
 * metricState.points.length // => 1
 *
 * metricState = refine(metricState, [{ name: 'products/search' }])
 * metricState.points.length // => 0
 *
 * // one day later
 * metricState = refine(metricState, [{ name: 'products/search' }])
 * metricState.points.length // => 1
 * ```
 *
 * @param {Object} config
 * @param {Period} config.period
 *        The period during which only one point may be produced.
 *
 * @return {Constraint}
 */
module.exports = ({ period }) => {
  invariant(Period.isPeriod(period), `"period" must be a valid period.`);

  return {
    name: `RateConstraint(${Period.toMilliseconds(period)}ms)`,

    getInitialState() {
      return {
        period,
        lastTrackedAt: Never
      }
    },

    shouldConsumeEvent() {
      return true
    },

    eventWasConsumed(constraint) {
      return constraint
    },

    shouldProducePoint(constraint) {
      return (
        constraint.lastTrackedAt === Never ||
        Period.hasElapsed(constraint.period, constraint.lastTrackedAt)
      );
    },

    pointWasProduced(constraint) {
      return set(constraint, {
        lastTrackedAt: new Date()
      })
    }
  }
}
