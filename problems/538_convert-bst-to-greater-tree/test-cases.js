const { buildTree } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildTree([5, 2, 13])],
  output : buildTree([18, 20, 13])
}, {
  input  : [buildTree([2, 0, 3, -4, 1])],
  output : buildTree([5, 6, 3, 2, 6])
}, {
  input  : [buildTree([1, 0, 4, -2, null, 3])],
  output : buildTree([8, 8, 4, 6, null, 7])
}];
