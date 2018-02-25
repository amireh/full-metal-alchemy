const invariant = require('invariant')

/**
 * Produce a point only after a number of events have been triggered (and
 * consumed). This constraint is mostly useful in conjunction with others.
 *
 * For an example application that allows login by UID but not by email, we're
 * led to believe it's confusing the users. We want to track if people are
 * repeatedly failing to login due to invalid UIDs.
 *
 * One way to capture that is by checking if they fail to login 3 times in 90
 * seconds.
 *
 * ```javascript
 * import { FrequencyConstraint, TypeConstraint } from 'full-metal-alchemy'
 *
 * const metric = {
 *   constraints: [
 *     TypeConstraint([ 'login-failed--invalid-uid' ]),
 *
 *     // 3 times
 *     FrequencyConstraint(3),
 *
 *     // within 30 seconds of each other
 *     ProximityConstraint({
 *       period: Period.seconds(30)
 *     })
 *   ]
 * }
 * ```
 *
 * @param  {Number} rate
 * @return {Constraint}
 */
module.exports = function FrequencyConstraint(rate) {
  invariant(rate > 0, "Throttle rate must be a positive number!")

  return {
    getInitialState: () => 0,
    shouldConsumeEvent: () => true,
    eventWasConsumed: count => count + 1,
    shouldProducePoint: count => count === rate,
    pointWasProduced: () => 0
  }
}