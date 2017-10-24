/**
 * Problem: https://leetcode.com/problems/find-largest-value-in-each-tree-row/description/
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
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) return [];

  var row = [root], result = [];
  while (row.length) {
    var max = -Number.MAX_VALUE;
    var nextRow = [];
    for (var i = 0; i < row.length; ++i) {
      max = Math.max(max, row[i].val);
      if (row[i].left) nextRow.push(row[i].left);
      if (row[i].right) nextRow.push(row[i].right);
    }
    result.push(max);
    row = nextRow;
  }
  return result;
};

module.exports = largestValues;
