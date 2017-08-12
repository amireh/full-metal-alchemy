const { DataPoint } = require('../')

module.exports = t => [
  {
    name: 'it coerces a data point value into a boolean; e.g. check for presence',
    metrics: [
      {
        name: 'Item Selection',
        dataPoints: [
          {
            name: 'viaKeyboard',
            value: DataPoint.flag('viaKeyboard'),
          // DataPoint.asBool('viaKeyboard'),
          }
        ],

        events: [
          'something-happened-using-pointer',
        ]
      },
    ],

    steps: [
      t.reduce({ name: 'something-happened-using-pointer' }),
      t.assert({
        events: [
          {
            index: 0,
            data: {
              viaKeyboard: false
            }
          }
        ]
      })
    ]
  }
]