const { Adapter, Period } = require('../')
const { assert } = require('chai')
const invariant = require('invariant')
const { inspect: nodeInspect } = require('util')

const inspect = x => nodeInspect(x, { colors: true, depth: 5 })
const t = {
  reduce: (params, ctx) => [ 'reduce', params, ctx ],
  advance: () => ([ 'advance' ]),
  assert: params => [ 'assert', params ],
  travelInTime: period => ([ 'travelInTime', period ]),
}

const applyAssert = (state, { eventCount = null, events = [] }, stepIndex) => {
  const fmt = message => `[STEP ${stepIndex+1}] ${message}`;
  const { points } = state.journal;

  if (typeof eventCount === 'number') {
    assert(points.length === eventCount,
      fmt(`Expected ${eventCount} metric events and not ${points.length}.
        DUMP=
        ${inspect(points)}
        ${inspect(state.journal.metrics)}
      `
      )
    )
  }

  events.forEach(({ index, name, data }) => {
    const event = points[index];

    assert(!!event,
      fmt(`Event at ${index} is out of bounds. (${points.length})`)
    )

    if (name) {
      assert(event.name === name,
        fmt(`Expected event "${name}" at index ${index} and not "${event.name}".`)
      )
    }

    if (data) {
      Object.keys(data).forEach(key => {
        assert.deepEqual(event.data[key], data[key],
          fmt(
            `Mismatch in value for data point "${key}":
            Expected: ${inspect(data[key])}
            Actual:   ${inspect(event.data[key])}
            DataSet:  ${inspect(event.data)}
          `)
        )
      })
    }
  })


  return state
}

const applyStep = (state, [ name, params, ctx ], stepIndex) => {
  switch (name) {
    case 'reduce':
      return Object.assign({}, state, {
        journal: Adapter.reduce(state.journal, [].concat(params), ctx)
      })

    case 'advance':
      return state;

    case 'assert':
      return applyAssert(state, params, stepIndex);

    case 'travelInTime':
      state.sinon.clock.tick(Period.toMilliseconds(params));

      return state;

    default:
      invariant(false, `Unrecognized step "${name}"`)
  }
}

exports.createTest = function({ sinon, spec }) {
  const journal = Adapter.create(spec.metrics)

  return function() {
    spec.steps.reduce(applyStep, { sinon, journal })
  }
}

exports.t = t