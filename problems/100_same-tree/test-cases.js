const { buildTree } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildTree([1, 2, 3]), buildTree([1, 2, 3])],
  output : true
}, {
  input  : [buildTree([1, 2, 3]), buildTree(1, 3, 2)],
  output : false
}];
