const { set } = require('./algorithm')

const CNR_SEQUENCE = 'CNR_SEQUENTIAL'
const advanceCursor = seq => {
  if (seq.cursor === seq.events.length) {
    return -1;
  }
  else {
    return seq.cursor + 1
  }
}

/**
 * @module
 */
const SequentialConstraint = events => ({
  type: CNR_SEQUENCE,
  events,
  cursor: -1
})

SequentialConstraint.appliesTo = (seq, event) => (
  seq.events.indexOf(event.name) > -1
)

SequentialConstraint.consume = (seq, event) => {
  const position = seq.events.indexOf(event.name);

  if (position === seq.cursor + 1) {
    return set(seq, { cursor: advanceCursor(seq) })
  }
  else if (position === 0 && SequentialConstraint.fulfilled(seq)) {
    return set(seq, { cursor: 0 });
  }
  else {
    return seq;
  }
}

SequentialConstraint.fulfilled = (seq) => (
  seq.cursor === seq.events.length - 1
)

SequentialConstraint.type = CNR_SEQUENCE

module.exports = SequentialConstraint;