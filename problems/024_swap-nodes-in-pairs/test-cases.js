const { buildList } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildList([1, 2, 3, 4])],
  output : buildList([2, 1, 4, 3])
}, {
  input  : [buildList([])],
  output : null
}];
