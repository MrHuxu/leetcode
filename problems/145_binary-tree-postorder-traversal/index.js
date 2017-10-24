/**
 * Problem: https://leetcode.com/problems/binary-tree-postorder-traversal/description/
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
var postorderTraversal = function(root) {
  if (!root) return [];
  var result = [];
  var traversal = function (node) {
    if (node.left) traversal(node.left);
    if (node.right) traversal(node.right);
    result.push(node.val);
    return;
  };
  traversal(root);
  return result;
};
module.exports = postorderTraversal;
