const { buildTree } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [[4, 2, 7, 5, 8, 1, 3, 6], [4, 7, 8, 5, 2, 6, 3, 1]],
  output : buildTree([1, 2, 3, 4, 5, null, 6, null, null, 7, 8])
}];