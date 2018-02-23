const Tuple = {
  of: (a, b) => ({ __first: a, __second: b }),
  is: x => x.hasOwnProperty('__first') && x.hasOwnProperty('__second'),
  firstOf: x => x.__first,
  secondOf: x => x.__second,
  extract: x => [ x.__first, x.__second ]
}

module.exports = Tuple
