/**
 * Problem: https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (!root) return;
  var result = [];
  var traversal = function (node) {
    result.push(node.val);
    if (node.left) traversal(node.left);
    if (node.right) traversal(node.right);
    return;
  };
  traversal(root);
  var iterator = root;
  for (var i = 1, len = result.length; i <= len; ++i) {
    iterator.left = null;
    iterator.right = result[i] === undefined ? null : new TreeNode(result[i]);
    iterator = iterator.right;
  }
};
module.exports = flatten;
