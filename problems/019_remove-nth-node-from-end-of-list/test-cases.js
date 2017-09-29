const { buildList } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildList([1, 2, 3, 4, 5]), 2],
  output : buildList([1, 2, 3, 5])
}];
