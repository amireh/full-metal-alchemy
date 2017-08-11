const invariant = require('invariant')
const EventSequence = exports;
const SEQ_ANY = 'ANY'

EventSequence.Any = events => ({ type: SEQ_ANY, events })

EventSequence.of = events => (
  Array.isArray(events) ?
    EventSequence.Any(events) :
    events
)

EventSequence.contains = (seq, event = {}) => {
  switch (seq.type) {
    case SEQ_ANY:
      return seq.events.indexOf(event.name) > -1;

    default:
      invariant(false, `Unrecognized event sequence "${seq.type}".`)
  }
}

// TODO
EventSequence.step = x => x;

EventSequence.SEQ_ANY = SEQ_ANY;