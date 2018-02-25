const { set } = require('../algorithm')

/**
 * @module StrictOrderConstraint
 *
 * Produce a point only if the specified events **and only they** are triggered
 * in the order specified. Should any unlisted event be triggered during the
 * sequence, it is reset.
 *
 * This constraint could be useful to locate work-arounds made by users to
 * achieve some function. Consider for example that we have a product listing
 * page which we've recently improved to allow users to deactivate products
 * right from that page instead of going to their detail pages and deactivating
 * them one by one.
 *
 * One way to capture the previous behavior could be to check whether the user
 * is visiting the product page only to deactivate it then to leave within 5
 * seconds of each interaction.
 *
 * The metric below represents that:
 *
 * ```javascript
 * import { StrictOrderConstraint } from 'full-metal-alchemy'
 *
 * {
 *   name: 'Visited product page to delete product',
 *   constraints: [
 *     StrictOrderConstraint([
 *       'page-visit/product',
 *       'product-deactivated',
 *       'page-leave/product'
 *     ])
 *   ]
 * }
 * ```
 *
 * @param  {Array.<String>} events
 * @return {Constraint}
 */
module.exports = (events) => ({
  name: `StrictOrderConstraint(${events.join(', ')})`,

  getInitialState() {
    return {
      events,
      cursor: -1
    }
  },

  shouldConsumeEvent: () => true,

  eventWasConsumed(seq, event) {
    const position = seq.events.indexOf(event.name);

    if (position === 0) {
      return set(seq, { cursor: 0 })
    }

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
