const { buildList } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildList([1, 3]), buildList([2])],
  output : buildList([1, 2, 3])
}];
