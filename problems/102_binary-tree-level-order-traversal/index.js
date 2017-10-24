/**
 * Problem: https://leetcode.com/problems/binary-tree-level-order-traversal/description/
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  var result = [];

  var traversal = function (nodes) {
    if (!nodes.length) return;

    var lowerNodes = [], tmp = [];
    nodes.forEach(function (node) {
      tmp.push(node.val);
      if (node.left) lowerNodes.push(node.left);
      if (node.right) lowerNodes.push(node.right);
    });
    result.push(tmp);
    traversal(lowerNodes);
  };
  traversal([root]);

  return result;
};
module.exports = levelOrder;
