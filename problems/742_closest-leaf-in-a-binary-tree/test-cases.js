const { buildTree } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildTree([1, 3, 2]), 1],
  output : 3
}, {
  input  : [buildTree([1]), 1],
  output : 1
}, {
  input  : [buildTree([1, 2, 3, 4, null, null, null, 5]), 2],
  output : 5
}, {
  input  : [buildTree([1, 2, 3, 4, 5]), 5],
  output : 5
}];