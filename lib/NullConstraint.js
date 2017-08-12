/**
 * @module
 */
const NullConstraint = events => ({ type: NullConstraint.type, events })
const contains = (seq, event) => seq.events.indexOf(event.name) > -1;

NullConstraint.type = 'CNR_NULL'
NullConstraint.appliesTo = (seq, event) => contains(seq, event)
NullConstraint.consume = x => x;
NullConstraint.fulfilled = () => true;

module.exports = NullConstraint;