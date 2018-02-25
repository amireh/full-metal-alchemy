const { DataPoint } = require('../')

module.exports = t => [
  {
    name: 'it extract data point literals',
    metrics: [
      {
        name: 'Login',
        events: [ 'login' ],
        dataPoints: [
          'userId',
          {
            name: 'accountId',
            value: DataPoint.reflectFromContext('accountId')
          }
        ],
      }
    ],

    steps: [
      t.reduce({ name: 'login', data: { userId: 'u1' } }, { accountId: 'a1' }),

      t.advance(),

      t.assert({
        events: [
          {
            index: 0,
            name: 'Login',
            data: {
              accountId: 'a1',
              userId: 'u1',
            }
          }
        ]
      }),
    ]
  }
]