/**
 * Problem: https://leetcode.com/problems/trim-a-binary-search-tree/description/
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
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
  if (!root) return root;

  root.left = (root.left && trimBST(root.left, L, R)) || null;
  root.right = (root.right && trimBST(root.right, L, R)) || null;

  if (root.val < L) {
    root = root.right;
  } else if (root.val > R) {
    root = root.left;
  }

  return root;
};
module.exports = trimBST;
