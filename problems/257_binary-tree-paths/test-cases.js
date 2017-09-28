const { buildTree } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [buildTree([1, 2, 3, null, 5])],
  output : ['1->2->5', '1->3']
}];
