const { BufferedStrategy, Period } = require('../')
const { assert } = require('./utils')
const moment = require('moment')

describe('scitylana::BufferedStrategy', function() {
  describe('.appliesTo', function() {
    it('is ok if the event has not been tracked yet', function() {
      const subject = BufferedStrategy({ period: Period.days(1) });

      assert.ok(BufferedStrategy.appliesTo(subject))
    })

    it('is ok if the event has been tracked but the period has elapsed', function() {
      const subject = BufferedStrategy.from({
        period: Period.days(1),
        lastTrackedAt: moment().subtract(2, 'days')
      });

      assert.ok(BufferedStrategy.appliesTo(subject))
    })

    it('is false otherwise', function() {
      const subject = BufferedStrategy.from({
        period: Period.days(1),
        lastTrackedAt: moment().subtract(6, 'hours')
      });

      assert.notOk(BufferedStrategy.appliesTo(subject))
    })
  })
})