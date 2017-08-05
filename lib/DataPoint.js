const invariant = require('invariant')
const DP_LITERAL = 'DP_LITERAL'

exports.of = spec => {
  if (typeof spec === 'string') {
    return { type: DP_LITERAL, name: spec }
  }
  else {
    invariant(false, `Unsupported data point specification: ${JSON.stringify(spec)}`)
  }
}

exports.extract = event => dataPoint => {
  switch (dataPoint.type) {
    case DP_LITERAL:
      return reduceLiteral(event, dataPoint)

    default:
      invariant(false, `Unknown data point type "${dataPoint.type}"`)
  }
}

function reduceLiteral(event, dataPoint) {
  return {
    name: dataPoint.name,
    value: event.data && event.data[dataPoint.name] || null
  }
}