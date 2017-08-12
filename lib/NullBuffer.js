const TYPE = 'NullBuffer'
const NullBuffer = () => ({ type: TYPE })

NullBuffer.type = TYPE
NullBuffer.allows = () => true
NullBuffer.step = x => x;

module.exports = NullBuffer