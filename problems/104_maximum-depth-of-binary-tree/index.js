/**
 * Problem: https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
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
var maxDepth = function(root) {
  return Math.max(
    root && root.left ? maxDepth(root.left) : 0,
    root && root.right ? maxDepth(root.right) : 0
  ) + (root ? 1 : 0);
};

module.exports = maxDepth;
