const CNR_NULL = 'CNR_NULL'
const NullConstraint = events => ({ type: CNR_NULL, events })
const contains = (seq, event) => seq.events.indexOf(event.name) > -1;

NullConstraint.type = CNR_NULL
NullConstraint.appliesTo = (seq, event) => contains(seq, event)
NullConstraint.consume = x => x;
NullConstraint.fulfilled = () => true;

module.exports = NullConstraint;