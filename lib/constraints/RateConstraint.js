const invariant = require('invariant')
const Period = require('../Period')
const { set } = require('../algorithm')
const Never = {}

module.exports = ({ period }) => {
  invariant(Period.isPeriod(period), `"period" must be a valid period.`);

  return {
    name: `RateConstraint(${Period.toMilliseconds(period)}ms)`,

    getInitialState() {
      return {
        period,
        lastTrackedAt: Never
      }
    },

    shouldConsumeEvent() {
      return true
    },

    eventWasConsumed(constraint) {
      return constraint
    },

    shouldProducePoint(constraint) {
      return (
        constraint.lastTrackedAt === Never ||
        Period.hasElapsed(constraint.period, constraint.lastTrackedAt)
      );
    },

    pointWasProduced(constraint) {
      return set(constraint, {
        lastTrackedAt: new Date()
      })
    }
  }
}
