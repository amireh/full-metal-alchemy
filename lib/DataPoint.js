const invariant = require('invariant')

/** @module */
const DataPoint = exports;

/**
 * Default data point reducer: reflect the value found at @key in the event's
 * data.
 *
 * @param  {String} key
 *         The property key of the value to reflect.
 *
 * @return {function(Object): Any}
 */
DataPoint.reflect = key => data => data[key]

/**
 * Fixed data point reducer: always return the specified value.
 *
 * @param  {String} value
 * @return {function(Object): value}
 */
DataPoint.always = value => () => value

/**
 * Coerce a value to a boolean; e.g. check for the existence of a value.
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
