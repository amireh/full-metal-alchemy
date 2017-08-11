const TYPE = 'GranularStrategy'
const GranularStrategy = () => ({ type: TYPE })

GranularStrategy.type = TYPE
GranularStrategy.appliesTo = () => true
GranularStrategy.step = x => x;

module.exports = GranularStrategy