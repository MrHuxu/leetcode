const { buildList } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildList([1, 4, 3, 2, 5, 2]), 3],
  output : buildList([1, 2, 2, 4, 3, 5])
}];