const { buildTree } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildTree([0, -1])],
  output : [0, -1]
}, {
  input  : [buildTree([1, 3, 2, 5, 3, null, 9])],
  output : [1, 3, 9]
}];
