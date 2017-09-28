const { buildTree } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildTree([5, 2, -5])],
  output : [2]
}, {
  input  : [buildTree([5, 14, null, 1])],
  output : [1, 15, 20]
}];
