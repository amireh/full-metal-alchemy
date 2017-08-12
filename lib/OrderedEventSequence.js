const { set } = require('./algorithm')

const SEQ_ORDERED = 'SEQ_ORDERED'
const advanceCursor = seq => {
  if (seq.cursor === seq.events.length) {
    return -1;
  }
  else {
    return seq.cursor + 1
  }
}

const OrderedEventSequence = events => ({
  type: SEQ_ORDERED,
  events,
  cursor: -1
})

OrderedEventSequence.appliesTo = (seq, event) => (
  seq.events.indexOf(event.name) > -1
)

OrderedEventSequence.step = (seq, event) => {
  const position = seq.events.indexOf(event.name);

  if (position === seq.cursor + 1) {
    return set(seq, { cursor: advanceCursor(seq) })
  }
  else if (position === 0 && OrderedEventSequence.fulfilled(seq)) {
    return set(seq, { cursor: 0 });
  }
  else {
    return seq;
  }
}

OrderedEventSequence.fulfilled = (seq) => (
  seq.cursor === seq.events.length - 1
)

OrderedEventSequence.type = SEQ_ORDERED

module.exports = OrderedEventSequence;