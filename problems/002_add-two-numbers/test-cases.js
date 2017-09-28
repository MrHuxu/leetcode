const { buildList } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildList([2, 4, 3]), buildList([5, 6, 4])],
  output : buildList([7, 0, 8])
}];
