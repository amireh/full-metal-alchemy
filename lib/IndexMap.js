const Defined = {}
const IndexMap = x => x.reduce(function(map, k) {
  map[k] = Defined;

  return map;
}, {})

IndexMap.Defined = Defined;

module.exports = IndexMap