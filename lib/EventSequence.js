const invariant = require('invariant')
const { tap } = require('./algorithm')
const AnyEventSequence = require('./AnyEventSequence')
const OrderedEventSequence = require('./OrderedEventSequence')
const EventSequence = exports;

const typeMap = {}

/** @private */
const cast = seq => tap(type => {
  invariant(type, `Unrecognized event sequence "${seq.type}"`)
}, typeMap[seq.type])

/**
 * Register a new event sequence factory. See [[./AnyEventSequence]] for a
 * minimal sample implementation.
 *
 * @param {EventSequenceImpl} factory
 *
 * @typedef {EventSequenceImpl}
 *
 * An implementation of an event sequence.
 *
 * @property {String} factory.type
 *        Unique event sequence type. Used internally to find out which sequence
 *        to use.
 *
 * @property {Function} factory.appliesTo
 * @property {Function} factory.step
 */
EventSequence.register = (factory) => {
  typeMap[factory.type] = factory;
};

/**
 * @private
 *
 * Morph a list of event names into an event sequence.
 *
 * @param  {Array.<String>} events
 * @return {EventSequenceImpl} instance
 */
EventSequence.of = events => (
  Array.isArray(events) ?
    AnyEventSequence(events) :
    events
)

/** @private */
EventSequence.appliesTo = (seq, event, data) => cast(seq).appliesTo(seq, event, data)

/** @private */
EventSequence.step = (seq, event, data) => cast(seq).step(seq, event, data);

EventSequence.register(AnyEventSequence)
EventSequence.register(OrderedEventSequence)

// convenience accessors
EventSequence.Any = AnyEventSequence;
EventSequence.Ordered = OrderedEventSequence;