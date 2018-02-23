const { C } = require('../')

module.exports = t => [
  {
    name: 'ordered sequencing',
    metrics: [
      {
        name: 'Products: Got Sidetracked',
        constraints: [
          C.OrderConstraint([
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
      t.advance(),

      t.reduce({ name: 'page-views/product-detail' }),
      t.assert({ eventCount: 0 }),
      t.advance(),

      t.reduce({ name: 'page-views/products' }),
      t.assert({ eventCount: 1 }),
      t.advance(),
    ]
  }
]