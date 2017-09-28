const { buildTree } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildTree([1, 0, 2]), 1, 2],
  output : buildTree([1, null, 2])
}, {
  input  : [buildTree([3, 0, 4, null, 2, null, null, null, null, 1]), 1, 3],
  output : buildTree([3, 2, null, 1])
}];
