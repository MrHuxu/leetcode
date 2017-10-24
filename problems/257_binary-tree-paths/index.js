/**
 * Problem: https://leetcode.com/problems/binary-tree-paths/description/
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  var result = [];

  var dfs = function (node, str) {
    if (node) {
      str = str + (str.length ? '->' : '') + node.val;
      if (!node.left && !node.right) {
        result.push(str);
      }
      dfs(node.left, str);
      dfs(node.right, str);
    }
  };
  dfs(root, '');

  return result;
};
module.exports = binaryTreePaths;
