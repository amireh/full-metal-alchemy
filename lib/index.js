const Buffer = require('./Buffer')
const Constraint = require('./Constraint')
const NullBuffer = require('./NullBuffer')
const NullConstraint = require('./NullConstraint')
const ParametricTimeBuffer = require('./ParametricTimeBuffer')
const SequentialConstraint = require('./SequentialConstraint')
const TimeBuffer = require('./TimeBuffer')

Constraint.register(NullConstraint)
Constraint.register(SequentialConstraint)

// convenience accessors
Constraint.None = NullConstraint;
Constraint.Ordered = SequentialConstraint;

Buffer.register(NullBuffer)
Buffer.register(ParametricTimeBuffer)
Buffer.register(TimeBuffer)

exports.Adapter = require('./Adapter')
exports.TimeBuffer = require('./TimeBuffer')
exports.Constraint = require('./Constraint')
exports.DataPoint = require('./DataPoint')
exports.NullBuffer = require('./NullBuffer')
exports.NullConstraint = require('./NullConstraint')
exports.SequentialConstraint = require('./SequentialConstraint')
exports.ParametricTimeBuffer = require('./ParametricTimeBuffer')
exports.Period = require('./Period')
