const id = x => x
const always = x => () => x

module.exports = {
  name: 'NullConstraint',

  /**
   * (): Object
   */
  getInitialState: always(undefined),

  /**
   * (
   *   state: Object,
   *   event: ApplicationEvent,
   *   data: Array.<DataPoint>,
   *   ?deps: Object
   * ): Boolean
   */
  shouldConsumeEvent: always(true),

  /**
   * (
   *   state: Object,
   *   event: ApplicationEvent,
   *   data: Array.<DataPoint>,
   *   ?deps: Object
   * ): Union.<
   *      nextState: Object |
   *      Tuple.<nextState: Object, nextDeps: Object>
   *    >
   *
   * The return value of this hook will be treated as the next state of the
   * constraint. To leave the state without modification, simply return the
   * first parameter or leave the hook undefined.
   *
   * To advance the state of dependencies as well as that of the constraint, a
   * Tuple may be yielded. For example:
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
   */
  eventWasConsumed: id,

  /**
   * (
   *   state: Object,
   *   event: ApplicationEvent,
   *   data: Array.<DataPoint>,
   *   ?deps: Object
   * ): Boolean
   */
  shouldProducePoint: always(true),

  /**
   * (
   *   state: Object,
   *   event: ApplicationEvent,
   *   data: Array.<DataPoint>,
   *   ?deps: Object
   * ): Union.<
   *      nextState: Object |
   *      Tuple.<nextState: Object, nextDeps: Object>
   *    >
   */
  pointWasProduced: id,
}
