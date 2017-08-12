module.exports = t => [
  {
    name: 'it applies a custom data point reducer',
    metrics: [
      {
        name: 'Products: Filter Applied',
        events: [ 'filter-product' ],
        dataPoints: [
          {
            name: 'hasNameFilter',
            reduceFn: data => !!data.nameFilter
          }
        ]
      }
    ],

    steps: [
      t.reduce({ name: 'filter-product' }),

      t.advance(),

      t.assert({
        eventCount: 1,
        events: [
          {
            index: 0,
            name: 'Products: Filter Applied',
            data: {
              hasNameFilter: false,
            }
          }
        ]
      }),

      t.reduce({ name: 'filter-product', data: { nameFilter: 'asdf' } }),

      t.assert({
        events: [
          {
            index: 0,
            data: {
              hasNameFilter: true
            }
          }
        ]
      })
    ]
  }
]