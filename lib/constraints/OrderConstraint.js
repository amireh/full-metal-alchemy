const { set } = require('../algorithm')

/**
 * @module OrderConstraint
 *
 * Produce a point only if the specified events are triggered in the order
 * specified. Other events that are not specified but still were triggered are
 * ignored. If you need a "strict" sequence, consider using
 * [[StrictOrderConstraint]] instead.
 *
 * ```javascript
 * import { OrderConstraint, ProximityConstraint } from 'full-metal-alchemy'
 *
 * {
 *   name: 'Logged out very quickly',
 *   constraints: [
 *     ProximityConstraint({ period: Period.seconds(30) }),
 *
 *     OrderConstraint([
 *       'logged-in',
 *       'logged-out'
 *     ])
 *   ]
 * }
 * ```
 *
 * @param  {Array.<String>} events
 * @return {Constraint}
 */
module.exports = (events) => ({
  name: `OrderConstraint(${events.join(', ')})`,

  getInitialState() {
    return {
      events,
      cursor: -1
    }
  },

  shouldConsumeEvent(seq, event) {
    return seq.events.indexOf(event.name) > -1
  },

  eventWasConsumed(seq, event) {
    const position = seq.events.indexOf(event.name);
    const nextInQueue = seq.cursor === seq.events.length -1 ? 0 : seq.cursor + 1

    if (position === nextInQueue) {
      return set(seq, { cursor: position })
    }
    else {
      return seq
    }
  },

  shouldProducePoint(seq) {
    return seq.cursor === seq.events.length - 1
  },
})
