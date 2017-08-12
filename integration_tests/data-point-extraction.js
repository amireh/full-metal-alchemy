module.exports = t => [
  {
    name: 'it extract data point literals',
    metrics: [
      {
        name: 'Login',
        events: [ 'login' ],
        dataPoints: [ 'userId' ],
      }
    ],

    steps: [
      t.reduce({ name: 'login', data: { userId: 'u1' } }),

      t.advance(),

      t.assert({
        events: [
          {
            index: 0,
            name: 'Login',
            data: {
              userId: 'u1'
            }
          }
        ]
      }),
    ]
  }
]