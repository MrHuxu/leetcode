const { buildTree } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildTree([1, 2]), [2, 1]],
  output : [-1]
}, {
  input  : [buildTree([1, 2, 3]), [1, 3, 2]],
  output : [1]
}, {
  input  : [buildTree([1, 2, 3]), [1, 2, 3]],
  output : []
}];