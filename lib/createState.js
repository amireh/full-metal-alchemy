const DataPoint = require('./DataPoint')
const { set } = require('./algorithm')
const { NullConstraint, TypeConstraint } = require('./constraints')

/**
 * Create a blank state for [[refinement | refine]].
 *
 * @param  {Array.<Metric>} metrics
 * @return {MetricState}
 *
 * @typedef {createState~MetricState}
 * @type {Object}
 * @alias MetricState
 *
 * The "metric state" is a transient structure to be used as input for
 * [[refinement | refine]]. It contains a reference to the metrics to be used as
 * well as the output of the process; the metric points and, optionally, the
 * adjusted context.
 */
const createState = (metrics = []) => ({
  /**
   * @memberOf createState~MetricState
   * @static
   * @property {Array.<Metric>} metrics
   */
  metrics: metrics.map(createMetric),

  /**
   * @memberOf createState~MetricState
   * @static
   * @property {Array.<MetricPoint>} points
   */
  points: [],

  /**
   * @memberOf createState~MetricState
   * @static
   * @property {Any?} context
   */
  context: undefined,
})

/**
 * @typedef {createState~Metric}
 * @type {Object}
 * @alias Metric
 *
 * The definition of a metric and the points it should produce.
 */
const createMetric = ({
  constraints = [],
  dataPoints = [],

  /**
   * @memberOf createState~Metric
   * @property {Array.<String>} events
   *
   * Convenience property for defining a [[type constraint | TypeConstraint]] on
   * this metric to make it use only the events specified.
   */
  events,

  name
}) => ({
  /**
   * @memberOf createState~Metric
   * @property {String} name
   *
   * A name to associate with the points produced by this metric. It is worth
   * noting that this name does not have to be unique. You can have multiple
   * metrics generating points with the same "name" but from different sources.
   */
  name,

  /**
   * @memberOf createState~Metric
   * @property {Array.<Constraint>} constraints
   *
   * Constraints that control how and when points are produced. This is the
   * "meat" of the metric and gives you a lot of power in [[refining | refine]]
   * raw [[application events | ApplicationEvent]] into [[points |
   * MetricPoint]].
   */
  constraints: (
    constraints
      // morph convenience "events" property into a TypeConstraint
      .concat(events ? TypeConstraint(events) : [])

      // assign defaults
      .map(constraint => set(NullConstraint, constraint))

      // instantiate each constraint with a blank state and grab a reference to
      // its hooks. The name is for reporting purposes and isn't really used by
      // us.
      .map(constraint => ({
        name: constraint.name,
        state: constraint.getInitialState(),
        hooks: constraint
      }))
  ),

  /**
   * @memberOf createState~Metric
   * @property {Array.<DataPoint>} dataPoints
   *
   * Data that the metric point should contain.
   *
   * A data point is a map between a name, something that describes the data in
   * the metric point, and a value.
   *
   * The name is arbitrary and gives you a chance to rename application event
   * data when it makes sense to do so. The value can be generated in a number
   * of ways as explained in [[DataPoint]].
   *
   * Below are sample definitions:
   *
   *     {
   *       dataPoints: [
   *         // point data "a" will contain application event data "aaa"
   *         {
   *           name: 'a',
   *           value: data => data.aaa
   *         },
   *         // point data "b" will be true or false based on whether
   *         // the event data "b" is present
   *         {
   *           name: 'b',
   *           value: DataPoint.flag('b')
   *         }
   *       ]
   *     }
   *
   * Passing a `String` for a [[DataPoint]] will cause it to morph into one that
   * simply [[reflects | DataPoint.reflect]] the value found in the application
   * event data. This is merely a convenience property since it's what you may
   * want to do most of the time. For example:
   *
   *     {
   *       dataPoints: [ 'a' ]
   *     }
   *
   * The metric point will contain a data point called "a" that is equal to
   * whatever "a" was set to in the event's data.
   */
  dataPoints: dataPoints.map(DataPoint.of),
})

module.exports = createState
