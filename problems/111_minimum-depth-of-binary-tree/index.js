/**
 * Problem: https://leetcode.com/problems/minimum-depth-of-binary-tree/description/
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
var minDepth = function(root) {
  if (!root) return 0;
  var result = 1;

  var traversal = function (nodes) {
    if (!nodes.length) return;

    var lowerNodes = [], flag = true;
    for (var i = 0, len = nodes.length; i < len; ++i) {
      if (!nodes[i].left && !nodes[i].right) {
        flag = false;
        break;
      } else {
        if (nodes[i].left) lowerNodes.push(nodes[i].left);
        if (nodes[i].right) lowerNodes.push(nodes[i].right);
      }
    }
    if (flag) {
      ++result;
      traversal(lowerNodes);
    }
  };
  traversal([root]);

  return result;
};
module.exports = minDepth;
