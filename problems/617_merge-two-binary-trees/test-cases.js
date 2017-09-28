const { buildTree } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildTree([1, 3, 2, 5]), buildTree([2, 1, 3, null, 4, null, 7])],
  output : buildTree([3, 4, 5, 5, 4, null, 7])
}, {
  input  : [buildTree([1, 2, null, 3]), buildTree([1, null, 2, null, null, null, 3])],
  output : buildTree([2, 2, 2, 3, null, null, 3])
}];
