/**
 * Problem: https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/
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
var getMinimumDifference = function (root) {
  var minDiff;

  var visit = function (node) {
    if (node.left) {
      if (node.left.right) {
        var tmp = node.left;
        while (tmp.right) {
          minDiff = Math.min(tmp.right.val - tmp.val, node.val - tmp.right.val, minDiff ? minDiff : Number.MAX_VALUE);
          tmp = tmp.right;
        }
      }
      else
        minDiff = minDiff ? Math.min(minDiff, node.val - node.left.val) : node.val - node.left.val;

      visit(node.left);
    }

    if (node.right) {
      if (node.right.left) {
        var tmp = node.right;
        while (tmp.left) {
          minDiff = Math.min(tmp.val - tmp.left.val, tmp.left.val - node.val, minDiff ? minDiff : Number.MAX_VALUE);
          tmp = tmp.left;
        }
      }
      else
        minDiff = minDiff ? Math.min(minDiff, node.right.val - node.val) : node.right.val - node.val;
      visit(node.right);
    }
  };
  visit(root);

  return minDiff;
};

module.exports = getMinimumDifference;
