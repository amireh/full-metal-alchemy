const invariant = require('invariant')
const { tap } = require('./algorithm')
const Buffer = exports;
const typeMap = {}

/** @private */
const cast = (buffer = Object) => tap(type => {
  invariant(type, `Unrecognized buffering implementation "${buffer.type}"`)
}, typeMap[buffer.type])

/**
 * Register a buffering buffer. See [[./NullBuffer]] for a minimal
 * sample implementation.
 *
 * @param {BufferImpl} factory
 *
 * @typedef {BufferImpl}
 *
 * An implementation of an event sequence.
 *
 * @property {String} factory.type
 * @property {Function} factory.allows
 * @property {Function} factory.step
 */
Buffer.register = (factory) => {
  typeMap[factory.type] = factory;
};

Buffer.wants = (buffer, event, data) => cast(buffer).allows(buffer, event, data)
Buffer.push = (buffer, event, data) => cast(buffer).step(buffer, event, data)
