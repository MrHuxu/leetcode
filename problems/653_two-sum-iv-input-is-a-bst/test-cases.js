const { buildTree } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildTree([5, 3, 6, 2, 4, null, 7]), 9],
  output : true
}, {
  input  : [buildTree([5, 3, 6, 2, 4, null, 7]), 28],
  output : false
}, {
  input  : [buildTree([2, 1, 3]), 4],
  output : true
}];