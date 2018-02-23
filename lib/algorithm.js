const Defined = {}

exports.set = (x, y) => Object.assign({}, x, y)
exports.indexByValue = x => x.reduce(function(map, k) {
  map[k] = Defined;

  return map;
}, {})

exports.indexByValue.Defined = Defined;
