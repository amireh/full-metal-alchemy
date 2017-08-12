/**
 * @module Package
 *
 * This is the primary exports of the `scitylana` package. Symbols exported by
 * this module are considered public and will be officially maintained.
 */

const Buffer = require('./Buffer')
const Constraint = require('./Constraint')
const NullBuffer = require('./NullBuffer')
const NullConstraint = require('./NullConstraint')
const ParametricTimeBuffer = require('./ParametricTimeBuffer')
const SequentialConstraint = require('./SequentialConstraint')
const TimeBuffer = require('./TimeBuffer')

Constraint.register(NullConstraint)
Constraint.register(SequentialConstraint)

Buffer.register(NullBuffer)
Buffer.register(ParametricTimeBuffer)
Buffer.register(TimeBuffer)

/** @export {Adapter} */
exports.Adapter = require('./Adapter')

/** @export {Constraint} */
exports.Constraint = require('./Constraint')

/** @export {DataPoint} */
exports.DataPoint = require('./DataPoint')

/** @export {ParametricTimeBuffer} */
exports.ParametricTimeBuffer = require('./ParametricTimeBuffer')

/** @export {Period} */
exports.Period = require('./Period')

/** @export {SequentialConstraint} */
exports.SequentialConstraint = require('./SequentialConstraint')

/** @export {TimeBuffer} */
exports.TimeBuffer = require('./TimeBuffer')
