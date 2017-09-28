const { buildTree } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildTree([1, 3, 2, 5, 3, null, 9])], 
  output : 4
}, {
  input  : [buildTree([1, 3, 3, 5])],
  output : 2
}, {
  input  : [buildTree([1, 3, 2, 5, null, null, 9, 6, null, null, null, null, null, null, 7])],
  output : 8
}];
