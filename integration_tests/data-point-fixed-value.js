const { DataPoint } = require('../')

module.exports = t => [
  {
    name: 'it products a data point with a static value',
    metrics: [
      {
        name: 'Item Selection',
        dataPoints: [
          {
            name: 'viaKeyboard',
            value: DataPoint.always(false)
          },
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