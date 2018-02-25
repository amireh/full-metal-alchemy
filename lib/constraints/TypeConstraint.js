const extractName = eventSpec => typeof eventSpec === 'string' ? eventSpec : eventSpec.name
const isEventChecker = x => (
  typeof x === 'object' &&
  typeof x.name === 'string' &&
  typeof x.when === 'function'
)

/**
 * @module TypeConstraint
 *
 * Block events that do not match the specified names or data.
 *
 * This constraint is created implicitly if you define the [[.events |
 * createState~Metric.events]] property on a metric.
 *
 *     {
 *       name: 'Logged in',
 *       constraints: [
 *         TypeConstraint([
 *           'logged-in'
 *         ])
 *       ]
 *     }
 *
 * @param  {Array.<String|TypeConstraint~EventChecker>} events
 *         Passing a string for an event name ignores the event data. If you
 *         want to filter by data or context, implement the structure described
 *         below.
 *
 * @return {Constraint}
 *
 * @typedef {TypeConstraint~EventChecker}
 * @type {Object}
 *
 * A specification for both event name and the data (or context) it is triggered
 * with.
 *
 *     {
 *       name: 'Logged in (mobile)',
 *       constraints: [
 *         TypeConstraint([
 *           { name: 'logged-in', when: data => data.isUsingMobile }
 *         ])
 *       ]
 *     }
 *
 * @property {String} name
 *           The name of the event.
 *
 * @property {function(Object, Object): Boolean} data
 *           A predicate function to check if the data is OK. Arguments are
 *           [data, context].
 */
module.exports = events => {
  const eventNames = events.map(extractName)
  const dataMap = events.filter(isEventChecker).reduce(function(map, x) {
    map[x.name] = x.when

    return map
  }, {})

  return {
    name: `TypeConstraint(${events.join(', ')})`,

    shouldConsumeEvent(_, event, data, context) {
      return eventNames.indexOf(event.name) > -1 && (
        !dataMap.hasOwnProperty(event.name) ||
        Boolean(
          dataMap[event.name](data, context)
        )
      )
    }
  }
}