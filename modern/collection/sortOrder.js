var baseEach = require('../internal/baseEach'),
    baseBinaryIndexBy = require('../internal/binaryIndexBy');

/**
 * Create a sorted index of array values, ascending from the index of the
 * lowest item in the array up through index of the highest item in the array.
 * @static
 * @memberOf
 * @category Collection
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function
 *  invoked per iteration.
 * @returns {Array} Returns the sorted index array.
 * @example
 *
 * _.sortOrder([6, 4, 5]);
 * // => [1, 2, 0]
 */
function sortOrder(collection, iteratee) {
  var indexes = []
  baseEach(collection, function(value, key) {
    var index = baseBinaryIndexBy(indexes, key, function(value) { value = collection[value]; return iteratee ? iteratee(value) : value; });
    indexes.splice(index, 0, key);
  });

  return indexes;
}

module.exports = sortOrder;
