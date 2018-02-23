const C = require('./constraints')

/**
 * @module Package
 *
 * This is the primary exports of the `scitylana` package. Symbols exported by
 * this module are considered public and will be officially maintained.
 */

/** @export {Adapter} */
exports.Adapter = require('./Adapter')

/** @export {DataPoint} */
exports.DataPoint = require('./DataPoint')

/** @export {Period} */
exports.Period = require('./Period')
exports.Tuple = require('./Tuple')

exports.C = C
exports.NullConstraint = C.NullConstraint
exports.OrderConstraint = C.OrderConstraint
exports.ParametricRateConstraint = C.ParametricRateConstraint
exports.RateConstraint = C.RateConstraint
exports.TypeConstraint = C.TypeConstraint