const { buildTree } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildTree([5, 4, 5, 1, 1, null, 5])],
  output : 2
}, {
  input  : [buildTree([1, 4, 5, 4, 4, null, 5])],
  output : 2
}, {
  input  : [buildTree([26,26,26,26,26,24,26])],
  output : 4
}, {
  input : [buildTree(
    [26,26,26,26,26,24,26,25,25,25,27,23,25,25,27,24,26,24,26,24,24,null,28,null,null,26,null,null,26,26,28,25,null,25,27,null,null,null,null,null,23,null,null,29,27,null,null,null,null,25,null,27,27,24,26,24,26,26,26,null,22,28,null,26,26,null,null,26,null,28,28,25,null,null,null,25,25,25,27,25,25,27,25,null,null,null,null,null,null,null,27,27,27,null,null,27,29,24,26,26,26,null,26,null,26,null,null,null,24,24,24,null,26,24,26,null,null,null,26,null,null,null,28,null,30,null,23,27,null,null,null,null,null,null,null,null,null,null,null,23,25,25,25,27,25,23,25,null,null,null,null,null,null,29,null,null,null,26,null,22,null,null,26,24,26,null,26,28,null,null,26,22,null,null,null,null,null,null,null,null,null,null,25,23,null,null,null,null,27]
  )],
  output : 4
}];