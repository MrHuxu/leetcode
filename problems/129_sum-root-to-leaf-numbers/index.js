/**
 * Problem: https://leetcode.com/problems/sum-root-to-leaf-numbers/description/
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
var sumNumbers = function(root) {
  if (!root) return 0;
  var result = 0;

  var recursion = function (node, str) {
    if (null === node.left && null === node.right) {
      result += parseInt(str + node.val, 10);
    } else {
      if (node.left !== null)
        recursion(node.left, str + node.val);
      if (node.right !== null)
        recursion(node.right, str + node.val);
    }
  };
  recursion(root, '');

  return result;
};
module.exports = sumNumbers;
