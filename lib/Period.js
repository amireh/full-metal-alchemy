const invariant = require('invariant')
const { indexByValue } = require('./algorithm')

const P_DAYS = 'P_DAYS'
const P_HOURS = 'P_HOURS'
const P_MINUTES = 'P_MINUTES'
const P_SECONDS = 'P_SECONDS'

const SECOND_MS = 1000
const MINUTE_MS =  60 * SECOND_MS
const HOUR_MS = 60 * MINUTE_MS
const DAY_MS = 24 * HOUR_MS

const TypeMap = indexByValue([ P_DAYS, P_HOURS, P_SECONDS ])

/**
 * @module
 * @preserveOrder
 *
 * Functions for representing and treating periods of time.
 */
const Period = exports;

/**
 * Create a period of a number of days.
 *
 * @param  {Number} count
 * @return {Object}
 */
Period.days = count => ({ type: P_DAYS, count })

/**
 * Create a period of a number of hours.
 *
 * @param  {Number} count
 * @return {Object}
 */
Period.hours = count => ({ type: P_HOURS, count })

/**
 * Create a period of a number of minutes.
 *
 * @param  {Number} count
 * @return {Object}
 */
Period.minutes = count => ({ type: P_MINUTES, count })

/**
 * Create a period of a number of seconds.
 *
 * @param  {Number} count
 * @return {Object}
 */
Period.seconds = count => ({ type: P_SECONDS, count })

/**
 * Test whether a given value is a period object.
 *
 * @param  {Any} x
 * @return {Boolean}
 */
Period.isPeriod = period => {
  return period && TypeMap[period.type] === indexByValue.Defined
}

/**
 * Test whether a given period has elapsed.
 *
 * @param  {Object} period
 * @param  {Date} when
 *         The current time as far as the test goes
 *
 * @return {Boolean}
 */
Period.hasElapsed = (period, when) => {
  const type = period && period.type || null

  switch (type) {
    case P_DAYS:
    case P_HOURS:
    case P_MINUTES:
    case P_SECONDS:
      return ((new Date()) - when) > Period.toMilliseconds(period)

    default:
      invariant(false, `Unrecognized period "${JSON.stringify(period)}"`)
  }
}

/**
 * Convert a period object to the number of milliseconds it represents.
 *
 * @param  {Object} period
 * @return {Number}
 */
Period.toMilliseconds = period => {
  const type = period && period.type || null

  switch (type) {
    case P_DAYS:
      return DAY_MS * period.count;

    case P_HOURS:
      return HOUR_MS * period.count;

    case P_MINUTES:
      return MINUTE_MS * period.count;

    case P_SECONDS:
      return SECOND_MS * period.count;

    default:
      invariant(false, `Unrecognized period "${JSON.stringify(period)}"`)
  }
}