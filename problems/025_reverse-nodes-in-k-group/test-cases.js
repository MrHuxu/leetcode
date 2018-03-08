const { buildList } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildList([1, 2, 3, 4, 5]), 2],
  output : buildList([2, 1, 4, 3, 5])
}, {
  input  : [buildList([1, 2, 3, 4, 5]), 3],
  output : buildList([3, 2, 1, 4, 5])
}, {
  input  : [buildList([1,2,3,4,5]), 1],
  output : buildList([1, 2, 3, 4, 5])
}, {
  input  : [buildList([]), 1],
  output : buildList([])
}];