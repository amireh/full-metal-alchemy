const Period = require("../Period");
const { assert, createSinonSuite } = require('./utils')

describe("Period", function() {
  const sinon = createSinonSuite(this)

  it('works', function() {
  })

  describe('.hasElapsed', function() {
    const timeTravel = period => {
      sinon.clock.tick(Period.toMilliseconds(period))
    }

    [ Period.days, Period.hours, Period.minutes, Period.seconds ].forEach(periodFn => {
      it(`works with ${periodFn.name}`, function() {
        const now = new Date()

        assert.notOk(Period.hasElapsed(periodFn(2), now))

        timeTravel(periodFn(2.1))

        assert.ok(Period.hasElapsed(periodFn(2), now))
      })
    })

    it('complains if the period is unknown', function() {
      assert.throws(function() {
        Period.hasElapsed(null)
      }, /Unrecognized period/)
    })
  })

  describe('.toMilliseconds', function() {
    const input = [
      { name: 'days', period: Period.days(1), output: 86400000 },
      { name: 'hours', period: Period.hours(1), output: 3600000 },
      { name: 'minutes', period: Period.minutes(1), output: 60 * 1000 },
      { name: 'seconds', period: Period.seconds(1), output: 1000 }
    ]

    input.forEach(({ name, period, output }) => {
      it(`works with "${name}"`, function() {
        assert.equal(Period.toMilliseconds(period), output)
      })
    })

    it('complains if the period is unknown', function() {
      assert.throws(function() {
        Period.toMilliseconds(null)
      }, /Unrecognized period/)
    })
  })
})
