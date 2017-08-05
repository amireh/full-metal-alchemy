const { Adapter, GranularStrategy, DataPoint, EventSequence } = require('../')
const { assert } = require('./utils')

describe('scitylana::Adapter', function() {
  describe('.create', function() {
    it('works', function() {
      Adapter.create();
    })

    it('defaults to the GranularStrategy', function() {
      const subject = Adapter.create([{}])

      assert.deepEqual(subject.metrics[0].strategy, GranularStrategy())
    })

    it('morphs "events" into an event sequence', function() {
      const subject = Adapter.create([{ events: [ 'foo' ] }])

      assert.deepEqual(subject.metrics[0].eventSequence, EventSequence.of([ 'foo' ]))
    })

    it('accepts an event sequence', function() {
      const sequence = EventSequence.Any([ 'foo' ]);
      const subject = Adapter.create([{ events: sequence }])

      assert.equal(subject.metrics[0].eventSequence, sequence)
    })

    it('creates data points', function() {
      const subject = Adapter.create([{ dataPoints: [ 'foo' ] }])

      assert.deepEqual(subject.metrics[0].dataPoints[0], DataPoint.of('foo'))
    })
  })

  describe('.consume', function() {
    it('works', function() {
      const adapter = Adapter.create([
        {
          name: 'Metric',
          strategy: GranularStrategy(),
          events: [
            'something-happened'
          ]
        }
      ]);

      const events = Adapter.consume(adapter, [
        { name: 'something-happened', data: {} }
      ])

      assert.equal(events.length, 1);
      assert.include(events[0], {
        name: 'Metric'
      })
    })

    it('serializes data points', function() {
      const adapter = Adapter.create([
        {
          name: 'Metric',
          strategy: GranularStrategy(),
          dataPoints: [ 'what' ],
          events: [
            'something-happened'
          ]
        }
      ]);

      const events = Adapter.consume(adapter, [
        {
          name: 'something-happened',
          data: {
            what: 'foo'
          }
        }
      ])

      assert.equal(events[0].data.length, 1)
      assert.include(events[0].data[0], {
        name: 'what',
        value: 'foo'
      })
    })
  })
})