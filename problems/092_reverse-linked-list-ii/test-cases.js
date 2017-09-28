const { buildList } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildList([1, 2, 3, 4, 5]), 2, 4],
  output : buildList([1, 4, 3, 2, 5])
}, {
  input  : [buildList([3, 5]), 1, 2],
  output : buildList([5, 3])
}];
