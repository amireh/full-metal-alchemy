const id = x => x
const always = x => () => x

/**
 * @module Constraint
 * @preserveOrder
 *
 * The interface of a constraint and its available hooks.
 *
 * Consult the [[README | README.md#constraints]] for the definition of a
 * constraint, this part will only be concerned with implementing one.
 *
 * A constraint is implemented through a series of functions applied to an
 * object called its state. The state has to capture whatever data is necessary
 * to apply the constraint.
 *
 * The implementation specifies a starting state in the [[.getInitialState |
 * .getInitialState]] hook which will be created for every metric that utilizes
 * the constraint, and other hooks can adjust the state as needed.
 *
 * During [[refinement | refine]], we say that an [[event | ApplicationEvent]]
 * is "consumed" when all the conditions of the defined constraints pass. Once
 * an event is successfully consumed, we proceed to producing a [[metric point |
 * MetricPoint]].
 *
 * A constraint allows you to control both stages of the process.
 *
 * ### State and context advancement
 *
 * The state and the [[application context | README.md#application-context]] can
 * both be "advanced" to a different version at the two distinct stages
 * described earlier: upon [[consuming an event | .eventWasConsumed]] and later
 * upon [[producing a point | .pointWasProduced]].
 *
 * When a constraint blocks an event from being consumed, **NO changes to either
 * the state or the context will be made during refinement.**
 *
 * When a constraint blocks a point from being produced, **all side-effects
 * caused by the [[.eventWasConsumed]] hook from both the current and the other
 * constraints on the metric will persist.**
 *
 * ### Example
 *
 * Let's assume we need an event to be triggered 3 times for a point to be
 * produced. A sample implementation could be:
 *
 *     {
 *       name: 'ThrottleConstraint',
 *
 *       getInitialState: () => ({ count: 0 }),
 *
 *       shouldConsumeEvent: () => true,
 *
 *       // increment the counter
 *       eventWasConsumed: state => ({ count: state.count + 1 }),
 *
 *       // did we collect 3 events yet?
 *       shouldProducePoint: state => state.count === 3,
 *
 *       // we did collect 3 events by this point, reset the counter
 *       pointWasProduced: () => ({ count: 0 })
 *     }
 *
 * ### Configuration
 *
 * If it is possible for your constraint logic to be customized, define it as a
 * function and have the user instantiate it with the parameters. For example,
 * let's revisit our sample implementation of the `ThrottleConstraint` to allow
 * the user to specify the rate:
 *
 * ```javascript
 * function ThrottleConstraint({ rate }) {
 *   invariant(rate > 0, "Throttle rate must be a positive number!")
 *
 *   return {
 *     // ...
 *     shouldProducePoint: state => state.count === rate
 *     // ...
 *   }
 * }
 * ```
 */
module.exports = {
  /**
   * @property {String} name
   *
   * A name to associate with the constraint for debugging purposes.
   */
  name: 'NullConstraint',

  /**
   * @type {Function}
   *
   * @return {Object}
   *         The initial state of the constraint.
   */
  getInitialState: always(undefined),

  /**
   * @type {Function}
   *
   * Test whether the event conforms to your conditions. You can utilize all of
   * the event, its data, as well as the application context to provide your
   * answer.
   *
   * @param {Object} state
   * @param {ApplicationEvent} event
   * @param {Array.<DataPoint>} data
   * @param {Any?} context
   *
   * @return {Boolean}
   */
  shouldConsumeEvent: always(true),

  /**
   * @type {Function}
   *
   * The return value of this hook will be treated as the next state of the
   * constraint. To leave the state without modification, simply return the
   * first parameter or leave the hook undefined.
   *
   * To advance the state of dependencies as well as that of the constraint, a
   * [[Tuple]] may be yielded. For example:
   *
   *     eventWasConsumed(state, event, data, context) {
   *       const nextState = ...
   *
   *       return Tuple.of(
   *         nextState,
   *         Object.assign({}, context, {
   *           loginFailureCount: context.loginFailureCount + 1
   *         })
   *       )
   *     }
   *
   * @param {Object} state
   * @param {ApplicationEvent} event
   * @param {Array.<DataPoint>} data
   * @param {Any?} context
   *
   * @return {Union.<Object | Tuple.<Object, Object>>}
   *
   */
  eventWasConsumed: id,

  /**
   * @type {Function}
   *
   * Test whether a metric point is ready to be produced. Just like in
   * [[.shouldConsumeEvent | .shouldConsumeEvent]], you can utilize the event,
   * its data, and the application context to formulate an answer.
   *
   * @param {Object} state
   * @param {ApplicationEvent} event
   * @param {Array.<DataPoint>} data
   * @param {Any?} context
   *
   * @return {Boolean}
   */
  shouldProducePoint: always(true),

  /**
   * @type {Function}
   *
   * Similar to [[.eventWasConsumed | .eventWasConsumed]] but triggered after a
   * point has been produced. Commonly you may implement this hook to reset
   * state, partially or otherwise.
   *
   * @param {Object} state
   * @param {ApplicationEvent} event
   * @param {Array.<DataPoint>} data
   * @param {Any?} context
   *
   * @return {Union.<Object | Tuple.<Object, Object>>}
   */
  pointWasProduced: id,
}
