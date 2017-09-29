const { buildTree } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildTree([1, 2]), 1],
  output : []
}, {
  input  : [buildTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, 5, 1]), 22],
  output : [[5, 4, 11, 2], [5, 8, 4, 5]]
}];
