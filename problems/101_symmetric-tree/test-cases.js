const { buildTree } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildTree([1, 2, 2, 3, 4, 4, 3])],
  output : true
}, {
  input  : [buildTree([1, 2, 2, null, 3, null, 3])],
  output : false
}];
