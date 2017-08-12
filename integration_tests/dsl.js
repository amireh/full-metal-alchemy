const { Adapter, Period } = require('../')
const { assert } = require('chai')
const invariant = require('invariant')
const { inspect: nodeInspect } = require('util')

const inspect = x => nodeInspect(x, { colors: true, depth: 5 })
const t = {
  reduce: params => [ 'reduce', params ],
  advance: () => ([ 'advance' ]),
  assert: params => [ 'assert', params ],
  travelInTime: period => ([ 'travelInTime', period ]),
}

const applyAssert = (state, { eventCount = null, events = [] }, stepIndex) => {
  const fmt = message => `[STEP ${stepIndex+1}] ${message}`;
  const { events: metricEvents } = state.journal;

  if (typeof eventCount === 'number') {
    assert(metricEvents.length === eventCount,
      fmt(`Expected ${eventCount} metric events and not ${metricEvents.length}.
        DUMP=
        ${inspect(metricEvents)}
        ${inspect(state.journal.metrics)}
      `
      )
    )
  }

  events.forEach(({ index, name, data }) => {
    const event = metricEvents[index];

    assert(!!event,
      fmt(`Event at ${index} is out of bounds. (${metricEvents.length})`)
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

const applyStep = (state, [ name, params ], stepIndex) => {
  switch (name) {
    case 'reduce':
      return Object.assign({}, state, {
        journal: Adapter.reduce(state.journal, [].concat(params))
      })

    case 'advance':
      return state;
      // return Object.assign({}, state, {
      //   adapter: Adapter.advance(state.adapter, state.metricEvents)
      // })

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
    spec.steps.reduce(applyStep, { sinon, journal, metricEvents: null })
  }
}

exports.t = t