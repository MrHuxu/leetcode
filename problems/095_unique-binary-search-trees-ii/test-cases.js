const { buildTree } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [0],
  output : []
}, {
  input  : [1],
  output : [buildTree([1])]
}, {
  input  : [2],
  output : [
    buildTree([1, null, 2]),
    buildTree([2, 1])
  ]
}, {
  input  : [3],
  output : [
    buildTree([1, null, 2, null, null, null, 3]),
    buildTree([1, null, 3, null, null, 2]),
    buildTree([2, 1, 3]),
    buildTree([3, 1, null, null, 2]),
    buildTree([3, 2, null, 1])
  ]
}];