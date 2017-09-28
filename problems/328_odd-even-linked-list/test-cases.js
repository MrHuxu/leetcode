const { buildList } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildList([0, 1, 2, 3, 4])],
  output : buildList([0, 2, 4, 1, 3])
}];
