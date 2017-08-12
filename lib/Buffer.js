const invariant = require('invariant')
const { tap } = require('./algorithm')
const typeMap = {}

/**
 * @module Buffer
 */
const Buffer = {};

// @private
const cast = (buffer = Object) => tap(type => {
  invariant(type, `Unrecognized buffering implementation "${buffer.type}"`)
}, typeMap[buffer.type])

/**
 * Register a buffer implementation. See [[./NullBuffer]] for a minimal
 * sample implementation.
 *
 * @param {Types.Buffer} factory
 */
Buffer.register = (factory) => {
  typeMap[factory.type] = factory;
};

Buffer.wants = (buffer, event, data) => cast(buffer).allows(buffer, event, data)
Buffer.push = (buffer, event, data) => cast(buffer).step(buffer, event, data)

module.exports = Buffer;