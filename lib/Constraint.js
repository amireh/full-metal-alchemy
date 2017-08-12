const invariant = require('invariant')
const { tap } = require('./algorithm')

/**
 * @module Constraint
 */
const Constraint = {};

const typeMap = {}

/* @private */
const cast = constraint => tap(type => {
  invariant(type, `Unrecognized constraint "${constraint.type}"`)
}, typeMap[constraint.type])

/**
 * @type {Function}
 *
 * Register a constraint implementation. See [[./NullConstraint]] for a minimal
 * sample implementation.
 *
 * @param {ConstraintType} factory
 *
 */
Constraint.register = (factory) => {
  typeMap[factory.type] = factory;
};

/* @private */
Constraint.appliesTo = (constraint, event, data) => (
  cast(constraint).appliesTo(constraint, event, data)
)

/* @private */
Constraint.consume = (constraint, event, data) => (
  cast(constraint).consume(constraint, event, data)
)

/* @private */
Constraint.fulfilled = (constraint, event, data) => (
  cast(constraint).fulfilled(constraint, event, data)
)

/* @private */
Constraint.isConstraint = value => !!(value && typeMap[value.type])

module.exports = Constraint;