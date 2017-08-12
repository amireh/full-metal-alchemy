const invariant = require('invariant')
const { tap } = require('./algorithm')
const Constraint = exports;

const typeMap = {}

/** @private */
const cast = constraint => tap(type => {
  invariant(type, `Unrecognized constraint "${constraint.type}"`)
}, typeMap[constraint.type])

/**
 * Register a constraint implementation. See [[./NullConstraint]] for a minimal
 * sample implementation.
 *
 * @param {ConstraintImpl} factory
 *
 * @typedef {ConstraintImpl}
 *
 * An implementation of an event sequence.
 *
 * @property {String} factory.type
 *        Unique identifier for constraints of this type. Used internally to
 *        find out which factory to use.
 *
 * @property {(Constraint, Event, Array.<DataPoint>): Boolean} factory.appliesTo
 * @property {(Constraint, Event, Array.<DataPoint>): Constraint} factory.advance
 * @property {(Constraint): Boolean} factory.fulfilled
 */
Constraint.register = (factory) => {
  typeMap[factory.type] = factory;
};

/** @private */
Constraint.appliesTo = (constraint, event, data) => (
  cast(constraint).appliesTo(constraint, event, data)
)

/** @private */
Constraint.consume = (constraint, event, data) => (
  cast(constraint).consume(constraint, event, data)
)

/** @private */
Constraint.fulfilled = (constraint, event, data) => (
  cast(constraint).fulfilled(constraint, event, data)
)

/** @private */
Constraint.isConstraint = value => !!(value && typeMap[value.type])