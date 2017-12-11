const { buildTree } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildTree([3, 9, 20, null, null, 15, 7])],
  output : [
    [15,7],
    [9,20],
    [3]
  ]
}];