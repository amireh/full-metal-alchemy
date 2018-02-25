const invariant = require('invariant')
const { getIn } = require('./algorithm')

/**
 * @module
 *
 * Functions for storing data from application events in metric points. These
 * functions are utilized in the [[definition of metrics | createState]].
 *
 * To perform custom treatment of a certain data point (aka a reducer) you can
 * implement the `value` function with the following signature:
 *
 *     function(data: Object?, context: Any?): Any
 *
 * Inside such a reducer you have access to both the application event's data as
 * well as the current context so that you can refine or compute the data any
 * way you wish.
 */
const DataPoint = exports;

/**
 * Reflect the value found at @path in the event's data.
 *
 * This is the default data point reducer.
 *
 * @param  {String|Array.<String>} path
 *         The property path of the value to reflect.
 *
 * @return {function(Object): Any}
 */
DataPoint.reflect = path => data => getIn(path, data)

/**
 * Reflect the value found at @path in the provided context.
 *
 * @param  {String|Array.<String>} path
 *         The property path of the value to reflect.
 *
 * @return {function(Object): Any}
 */
DataPoint.reflectFromContext = path => (data, context) => getIn(path, context)

/**
 * Always return the specified value regardless of the application event data.
 *
 * For example, let's assume we have a UI interaction that can be triggered
 * using either the mouse or the keyboard and that each kind of interaction
 * triggers a **distinct** event, but we want the metric point to store
 * information anyway:
 *
 *     const metrics = [
 *       {
 *         name: 'Search box opened',
 *         events: [ 'search-box/opened-using-mouse' ],
 *         dataPoints: [
 *           {
 *             name: 'usingMouse',
 *             DataPoint.always(true)
 *           }
 *         ]
 *       },
 *       {
 *         name: 'Search box opened',
 *         events: [ 'search-box/opened-using-keyboard' ],
 *         dataPoints: [
 *           {
 *             name: 'usingKeyboard',
 *             DataPoint.always(true)
 *           }
 *         ]
 *       }
 *     ]
 *
 * @param  {Any} value
 * @return {function(): Any}
 */
DataPoint.always = value => () => value

/**
 * Store whether a value in the application event data was present at all,
 * regardless of its value (it has to evaluate to `true`.)
 *
 * This coercion is useful in cases when you're interested only in whether a
 * certain value is set. For example, let's assume we have a UI filtering
 * control that lets the user filter results by Name and Date of Birth. What we
 * want the metric point to convey is whether they are using the name filter,
 * the date of birth filter, or both. The values are irrelevant.
 *
 *     const metrics = [
 *       {
 *         name: 'Filtered results',
 *         events: [ 'results-filtered' ],
 *         dataPoints: [
 *           {
 *             name: 'byName',
 *             value: DataPoint.flag('name')
 *           },
 *           {
 *             name: 'byDateOfBirth',
 *             value: DataPoint.flag('dateOfBirth')
 *           }
 *         ]
 *       }
 *     ]
 *
 *     const event1 = { name: 'results-filtered', data: { name: 'a' } }
 *     // => { byName: true, byDateOfBirth: false }
 *
 *     const event2 = { name: 'results-filtered', data: { name: null } }
 *     // => { byName: false, byDateOfBirth: false }
 *
 *
 * @param  {String} key
 *         The property key of the value to test.
 *
 * @return {function(Object): Boolean}
 */
DataPoint.flag = key => data => !!data[key]

/** @private */
DataPoint.of = spec => {
  if (typeof spec === 'string') {
    return DataPoint.of({ name: spec, value: DataPoint.reflect(spec) })
  }

  invariant(spec && typeof spec === 'object',
    `Unsupported data point specification: ${JSON.stringify(spec)}`
  );

  invariant(typeof spec.name === 'string',
    `Data point must specify a "name" string.`
  )

  const reduceFn = spec.value || spec.reduceFn;

  invariant(typeof reduceFn === 'function',
    `Data point must specify a "reduceFn" function.`
  )

  return { name: spec.name, reduceFn: reduceFn }
}

/** @private */
DataPoint.extract = (event, context) => dataPoint => {
  invariant(typeof dataPoint.reduceFn === 'function',
    `Invalid data point; expected a "reduceFn" function.
    Source: ${JSON.stringify(dataPoint)}`
  )

  return {
    name: dataPoint.name,
    value: dataPoint.reduceFn(event.data || {}, context)
  }
}

/** @private */
DataPoint.toMap = dataPoints => dataPoints.reduce(function(map, x) {
  map[x.name] = x.value;

  return map;
}, {})
