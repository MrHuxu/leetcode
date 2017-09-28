const { buildTree } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildTree([2, 1, 3])],
  output : true
}, {
  input  : [buildTree([1, 2, 3])],
  output : false
}];
