const { buildTree } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildTree([1,2,3,4]), 4, 3],
  output : false
}, {
  input  : [buildTree([1,2,3,null,4,null,5]), 5, 4],
  output : true
}, {
  input  : [buildTree([1,2,3,null,4]), 2, 3],
  output : false
}];