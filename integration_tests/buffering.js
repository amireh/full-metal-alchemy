const { TimeBuffer, Period } = require('../')

module.exports = t => [
  {
    name: 'using TimeBuffer',
    metrics: [
      {
        name: 'Products: Keyboard Navigation',
        buffer: TimeBuffer({ period: Period.days(1) }),
        events: [
          'products/product-selected-using-keyboard',
          'products/product-expanded-using-keyboard',
          'products/sub-product-selected-using-keyboard'
        ],
      },
    ],

    steps: [
      t.reduce([
        { name: 'products/sub-product-selected-using-keyboard' },
        { name: 'products/product-selected-using-keyboard' },
      ]),

      t.assert({ eventCount: 1 }),
      t.advance(),

      t.reduce({ name: 'products/product-selected-using-keyboard' }),
      t.assert({ eventCount: 0 }),

      t.travelInTime(Period.days(1)),
      t.travelInTime(Period.seconds(1)),

      t.reduce({ name: 'products/product-selected-using-keyboard' }),
      t.assert({ eventCount: 1 }),
    ]
  }
]