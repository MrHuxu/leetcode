const { buildTree } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildTree([3,5,1,6,2,0,8,null,null,7,4])],
  output : buildTree([2, 7, 4])
}, {
  input  : [buildTree([0,1,null,3,2])],
  output : buildTree([1, 3, 2])
}];