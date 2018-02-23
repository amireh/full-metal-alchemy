const { C, Period } = require('../')

module.exports = t => [
  {
    name: 'using ParametricTimeBuffer',
    metrics: [
      {
        name: 'Products: Keyboard Navigation',
        dataPoints: [ 'a' ],
        constraints: [
          C.ParametricRateConstraint({ period: Period.hours(6) }),
          C.TypeConstraint([
            'products/product-selected-using-keyboard',
          ]),
        ],
      },
    ],

    steps: [
      t.reduce({ name: 'products/product-selected-using-keyboard' }),
      t.assert({ eventCount: 1 }),
      t.advance(),

      t.travelInTime(Period.hours(1)),

      t.reduce({ name: 'products/product-selected-using-keyboard', data: { a: true } }),
      t.assert({ eventCount: 1 }),
      t.advance(),

      t.travelInTime(Period.hours(5.25)),

      t.reduce({ name: 'products/product-selected-using-keyboard' }),
      t.assert({ eventCount: 1 }),

      // shouldn't work because it was last tracked at 01:00 and now it's 6:15
      t.reduce({ name: 'products/product-selected-using-keyboard', data: { a: true } }),
      t.assert({ eventCount: 0 }),

      // now it's >= 07:00 so it should be trackable
      t.travelInTime(Period.hours(0.76)),

      t.reduce({ name: 'products/product-selected-using-keyboard', data: { a: true } }),
      t.assert({ eventCount: 1 }),
    ]
  }
]