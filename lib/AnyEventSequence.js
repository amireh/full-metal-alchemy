const SEQ_ANY = 'SEQ_ANY'
const AnyEventSequence = events => ({ type: SEQ_ANY, events })
const contains = (seq, event) => seq.events.indexOf(event.name) > -1;

AnyEventSequence.type = SEQ_ANY
AnyEventSequence.appliesTo = (seq, event) => contains(seq, event)
AnyEventSequence.step = x => x;

module.exports = AnyEventSequence;