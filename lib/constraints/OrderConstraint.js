const { set } = require('../algorithm')

module.exports = (events) => ({
  name: `OrderConstraint(${events.join(', ')})`,

  getInitialState() {
    return {
      events,
      cursor: -1
    }
  },

  shouldConsumeEvent(seq, event) {
    return seq.events.indexOf(event.name) > -1
  },

  eventWasConsumed(seq, event) {
    const position = seq.events.indexOf(event.name);
    const nextInQueue = seq.cursor === seq.events.length -1 ? 0 : seq.cursor + 1

    if (position === nextInQueue) {
      return set(seq, { cursor: position })
    }
    else {
      return seq
    }
  },

  shouldProducePoint(seq) {
    return seq.cursor === seq.events.length - 1
  },
})
