const { buildTree } = require('../../scripts/problem-utils');

module.exports = [{
  input  : [[3, 2, 1, 6, 0, 5]],
  output : buildTree([6, 3, 5, null, 2, 0, null, null, null, null, 1, null, null, null, null])
}];