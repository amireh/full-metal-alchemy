const { OrderConstraint, RateConstraint, Period } = require('../')

module.exports = t => [
  {
    name: 'sequential constraint + time buffering',
    metrics: [
      {
        name: 'Products: Got Sidetracked',
        constraints: [
          RateConstraint({ period: Period.days(1) }),
          OrderConstraint([
            'products/clicked-product-link',
            'page-views/product-detail',
            'page-views/products',
          ])
        ],
      },
    ],

    steps: [
      t.reduce({ name: 'products/clicked-product-link' }),
      t.assert({ eventCount: 0 }),

      t.reduce({ name: 'page-views/product-detail' }),
      t.assert({ eventCount: 0 }),

      t.reduce({ name: 'page-views/products' }),
      t.assert({ eventCount: 1 }),

      t.reduce({ name: 'products/clicked-product-link' }),
      t.assert({ eventCount: 0 }),

      t.reduce({ name: 'page-views/product-detail' }),
      t.assert({ eventCount: 0 }),

      t.reduce({ name: 'page-views/products' }),
      t.assert({ eventCount: 0 }),

      t.travelInTime(Period.days(1.1)),

      t.reduce({ name: 'products/clicked-product-link' }),
      t.assert({ eventCount: 0 }),

      t.reduce({ name: 'page-views/product-detail' }),
      t.assert({ eventCount: 0 }),

      t.reduce({ name: 'page-views/products' }),
      t.assert({ eventCount: 1 }),
    ]
  }
]