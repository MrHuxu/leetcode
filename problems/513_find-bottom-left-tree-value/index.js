/**
 * Problem: https://leetcode.com/problems/find-bottom-left-tree-value/description/
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  var row = [root];
  while (true) {
    var nextRow = [];
    for (var i = 0; i < row.length; ++i) {
      if (row[i].left) nextRow.push(row[i].left);
      if (row[i].right) nextRow.push(row[i].right);
    }
    if (nextRow.length) {
      row = nextRow;
    } else {
      break;
    }
  }
  return row[0].val;
};

module.exports = findBottomLeftValue;
