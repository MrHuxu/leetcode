/**
 * Problem: https://leetcode.com/problems/sum-of-left-leaves/description/
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
var sumOfLeftLeaves = function(root) {
  var sum = 0;

  // position: true => left, false => right
  var visit = function (node, position) {
    if (!node.left && !node.right && position) {
      sum += node.val;
    } else {
      if (node.left) visit(node.left, true);
      if (node.right) visit(node.right, false);
    }
  };
  if (root) visit(root, false);

  return sum;
};
module.exports = sumOfLeftLeaves;
