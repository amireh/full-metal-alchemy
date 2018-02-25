/**
 * @module Tuple
 * @preserveOrder
 *
 * A construct for representing a pair of values.
 *
 * A tuple is used in functions such as [[constraint hooks | Constraint]] where
 * you may want to return more than one value to FMA. The advantage of using a
 * tuple over a regular array is that the values can be anything (including
 * arrays) and allow FMA to treat it uniformly.
 */
const Tuple = {
  /**
   * Create a tuple of a pair of values.
   *
   * @param  {Any} a
   * @param  {Any} b
   *
   * @return {Object}
   */
  of: (a, b) => ({ __first: a, __second: b }),
  /**
   * Test whether a given value is a tuple record.
   *
   * @param  {Any} x
   * @return {Boolean}
   */
  is: x => x && x.hasOwnProperty('__first') && x.hasOwnProperty('__second'),

  /**
   * Retrieve the first value from a tuple record.
   *
   * @param  {Object} x
   * @return {Any}
   */
  firstOf: x => x.__first,

  /**
   * Retrieve the second value from a tuple record.
   *
   * @param  {Object} x
   * @return {Any}
   */
  secondOf: x => x.__second,
}

module.exports = Tuple
