const { buildList } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [[buildList([2]), buildList([0])]],
  output : buildList([0, 2])
}];

