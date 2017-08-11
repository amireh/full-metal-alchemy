exports.set = (x, y) => Object.assign({}, x, y)
exports.tap = (f, x) => { f(x); return x };