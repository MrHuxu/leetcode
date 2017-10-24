/**
 * Problem: https://leetcode.com/problems/binary-tree-inorder-traversal/description/
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
var inorderTraversal = function(root) {
  if (!root) return [];
  var result = [];
  var traversal = function (node) {
    if (node.left) traversal(node.left);
    result.push(node.val);
    if (node.right) traversal(node.right);
    return;
  };
  traversal(root);
  return result;
};

module.exports = inorderTraversal;
