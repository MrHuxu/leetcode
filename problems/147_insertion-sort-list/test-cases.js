const { buildList } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildList([1, 1])],
  output : buildList([1, 1])
}, {
  input  : [buildList([2, 1, 4, 3])],
  output : buildList([1, 2, 3, 4])
}];
