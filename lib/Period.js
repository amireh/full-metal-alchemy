const invariant = require('invariant')
const IndexMap = require('./IndexMap')

const P_DAYS = 'P_DAYS'
const P_HOURS = 'P_HOURS'
const P_MINUTES = 'P_MINUTES'
const P_SECONDS = 'P_SECONDS'

const SECOND_MS = 1000
const MINUTE_MS =  60 * SECOND_MS
const HOUR_MS = 60 * MINUTE_MS
const DAY_MS = 24 * HOUR_MS

const TypeMap = IndexMap([ P_DAYS, P_HOURS, P_SECONDS ])
const Period = exports;

Period.days = count => ({ type: P_DAYS, count })
Period.hours = count => ({ type: P_HOURS, count })
Period.minutes = count => ({ type: P_MINUTES, count })
Period.seconds = count => ({ type: P_SECONDS, count })
Period.isPeriod = period => {
  return period && TypeMap[period.type] === IndexMap.Defined
}

Period.hasElapsed = (period, when) => {
  switch (period.type) {
    case P_DAYS:
    case P_HOURS:
    case P_MINUTES:
    case P_SECONDS:
      return ((new Date()) - when) > Period.toMilliseconds(period)

    default:
      invariant(false, `Unrecognized period "${JSON.stringify(period)}"`)
  }
}

Period.toMilliseconds = period => {
  switch (period.type) {
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