/**
 * Problem: https://leetcode.com/problems/binary-tree-right-side-view/description/
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
var rightSideView = function(root) {
  if (!root) return [];
  var result = [];

  var traversal = function (nodes) {
    if (!nodes.length) return;
    result.push(nodes[nodes.length - 1].val);
    var lowerNodes = [], tmp = [];
    nodes.forEach(function (node) {
      tmp.push(node.val);
      if (node.left) lowerNodes.push(node.left);
      if (node.right) lowerNodes.push(node.right);
    });
    traversal(lowerNodes);
  };
  traversal([root]);

  return result;
};
module.exports = rightSideView;
