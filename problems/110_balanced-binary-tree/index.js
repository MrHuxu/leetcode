/**
 * Problem: https://leetcode.com/problems/balanced-binary-tree/description/
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (!root) return true;

  const traverse = node => {
    const [leftDepth, leftFlag] = node.left ? traverse(node.left) : [0, true];
    const [rightDepth, rightFlag] = node.right ? traverse(node.right) : [0, true];
    if (!(leftFlag && rightFlag)) {
      return [0, false];
    } else {
      if (Math.abs(leftDepth - rightDepth) > 1) {
        return [0, false];
      } else {
        return [1 + Math.max(leftDepth, rightDepth), true];
      }
    }
  };
  return traverse(root)[1];
};

