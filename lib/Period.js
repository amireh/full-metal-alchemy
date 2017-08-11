const invariant = require('invariant')
const IndexMap = require('./IndexMap')

const P_DAYS = 'P_DAYS'
const DAY_MS = 24 * 60 * 60 * 1000
const TypeMap = IndexMap([ P_DAYS ])
const Period = exports;

Period.days = count => ({ type: P_DAYS, count })
Period.isPeriod = period => {
  return period && TypeMap[period.type] === IndexMap.Defined
}

Period.hasElapsed = (period, when) => {
  switch (period.type) {
    case P_DAYS:
      return ((new Date()) - when) > Period.toMilliseconds(period)

    default:
      invariant(false, `Unrecognized period "${JSON.stringify(period)}"`)
  }
}

Period.toMilliseconds = period => {
  switch (period.type) {
    case P_DAYS:
      return DAY_MS * period.count;

    default:
      invariant(false, `Unrecognized period "${JSON.stringify(period)}"`)
  }
}