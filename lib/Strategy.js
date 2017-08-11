const invariant = require('invariant')
const { tap } = require('./algorithm')
const BufferedStrategy = require('./BufferedStrategy')
const GranularStrategy = require('./GranularStrategy')
const ParametricBufferedStrategy = require('./ParametricBufferedStrategy')
const Strategy = exports;

const typeMap = {}

/** @private */
const cast = strategy => tap(type => {
  invariant(type, `Unrecognized strategy "${strategy.type}"`)
}, typeMap[strategy.type])

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
Strategy.register = (factory) => {
  typeMap[factory.type] = factory;
};

Strategy.appliesTo = (strategy, event, data) => cast(strategy).appliesTo(strategy, event, data)
Strategy.step = (strategy, event, data) => cast(strategy).step(strategy, event, data)

Strategy.register(BufferedStrategy)
Strategy.register(GranularStrategy)
Strategy.register(ParametricBufferedStrategy)
