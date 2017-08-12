/**
 * @module
 */
const NullBuffer = () => ({ type: NullBuffer.type })

NullBuffer.type = 'NullBuffer'
NullBuffer.allows = () => true
NullBuffer.step = x => x;

module.exports = NullBuffer