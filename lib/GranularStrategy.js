const GranularStrategy = () => ({ type: 'GranularStrategy' })

GranularStrategy.appliesTo = () => true
GranularStrategy.step = x => x;

module.exports = GranularStrategy