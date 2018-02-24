module.exports = t => [
  {
    name: 'it passes the context to a data point reducer',
    metrics: [
      {
        name: 'Item Selection',
        dataPoints: [
          {
            name: 'counter',
            value: (x, ctx) => ctx.loginCount * 2
          },
        ],

        events: [
          'something-happened',
        ]
      },
    ],

    steps: [
      t.reduce({ name: 'something-happened' }, { loginCount: 1 }),
      t.assert({
        events: [
          {
            index: 0,
            data: {
              counter: 2
            }
          }
        ]
      })
    ]
  }
]