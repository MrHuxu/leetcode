const { buildTree } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildTree([1, null, 2, null, null, null, 3])],
  output : false
}, {
  input  : [buildTree([1, 2, 3, 4, 5, null, 6, null, null, 7, 8])],
  output : true
}];