const { buildTree } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildTree([2, 2, 5, null, null, 5, 7])],
  output : 5
}, {
  input  : [buildTree([2, 2, 2])],
  output : -1
}, {
  input  : [buildTree([])],
  output : -1
}];
