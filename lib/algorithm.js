const Defined = {}

exports.set = (x, y) => Object.assign({}, x, y)
exports.indexByValue = x => x.reduce(function(map, k) {
  map[k] = Defined;

  return map;
}, {})

exports.indexByValue.Defined = Defined;

exports.getIn = (path, value) => {
  if (!Array.isArray(path)) {
    return value && value[path] || undefined
  }

  const depth = path.length
  let cursor = value

  for (let i = 0; i < depth; ++i) {
    if (!cursor) {
      return undefined
    }

    cursor = cursor[path[i]]
  }

  return cursor
}
