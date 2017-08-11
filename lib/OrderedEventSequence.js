const { set } = require('./algorithm')

const SEQ_ORDERED = 'SEQ_ORDERED'
const advanceCursor = seq => {
  if (seq.cursor === seq.events.length -1) {
    return 0;
  }
  else {
    return seq.cursor + 1
  }
}

const OrderedEventSequence = events => ({
  type: SEQ_ORDERED,
  events,
  cursor: 0
})

OrderedEventSequence.appliesTo = (seq, event) => (
  seq.events.indexOf(event.name) === seq.cursor
)

OrderedEventSequence.step = (seq) => set(seq, { cursor: advanceCursor(seq) })

OrderedEventSequence.type = SEQ_ORDERED

module.exports = OrderedEventSequence;