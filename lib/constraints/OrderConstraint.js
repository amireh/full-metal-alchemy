const { set } = require('../algorithm')
const advanceCursor = seq => seq.cursor === seq.events.length ? -1 : seq.cursor + 1
const fulfilled = seq => seq.cursor === seq.events.length - 1

module.exports = (events) => ({
  name: `OrderConstraint(${events.join(', ')})`,

  getInitialState() {
    return {
      events,
      cursor: -1
    }
  },

  shouldConsumeEvent(sequence, event) {
    return sequence.events.indexOf(event.name) > -1
  },

  eventWasConsumed(sequence, event) {
    const position = sequence.events.indexOf(event.name);

    if (position === sequence.cursor + 1) {
      return set(sequence, { cursor: advanceCursor(sequence) })
    }
    else if (position === 0 && fulfilled(sequence)) {
      return set(sequence, { cursor: 0 });
    }
    else {
      return sequence;
    }
  },

  shouldProducePoint(sequence) {
    return fulfilled(sequence)
  }
})
