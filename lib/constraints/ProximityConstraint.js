const invariant = require('invariant')
const Period = require('../Period')
const Never = {}

/**
 * @module ProximityConstraint
 *
 * Produce a point only if events are triggered within a certain period of each
 * other. This constraint only works in conjunction with other constraints like
 * [[OrderConstraint]], [[TypeConstraint]] or [[FrequencyConstraint]].
 *
 * This constraint could be useful to look into repetition behavior. Perhaps we
 * want to know whether users are trying to add notes one after another but we
 * know the UI is clunky in how it lets you add notes and we want to improve
 * that if it's worth it.
 *
 * Considering the period between each time the user adds a note _could_ be a
 * way to glean into that, although it may not be fully reliable since we don't
 * know how long it takes them to write each note.
 *
 * ```javascript
 * import { OrderConstraint, ProximityConstraint } from 'full-metal-alchemy'
 *
 * {
 *   name: 'Repeatedly left notes',
 *   events: [ 'note-added' ],
 *   constraints: [
 *     ProximityConstraint({ period: Period.minutes(1) }),
 *     FrequencyConstraint(3)
 *   ]
 * }
 * ```
 *
 * @param {Object} config
 * @param {Period} config.period
 *
 * @return {Constraint}
 */
module.exports = ({ period }) => {
  invariant(Period.isPeriod(period), `"period" must be a valid period.`);

  const milliseconds = Period.toMilliseconds(period)

  return {
    name: `ProximityConstraint(${milliseconds}ms)`,

    getInitialState() {
      return {
        lastEventAt: Never
      }
    },

    shouldConsumeEvent(state) {
      if (state.lastEventAt === Never) {
        return true
      }
      else {
        return (new Date()) - state.lastEventAt <= milliseconds
      }
    },

    eventWasConsumed() {
      return { lastEventAt: new Date() }
    },

    pointWasProduced() {
      return { lastEventAt: Never }
    }
  }
}
