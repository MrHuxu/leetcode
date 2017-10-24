/**
 * Problem: https://leetcode.com/problems/longest-univalue-path/description/
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
var longestUnivaluePath = function(root) {
  let max = 0;

  const traverse = node => {
    let len = 0, l = 0, r = 0;
    if (node.left) {
      l = traverse(node.left);
      if (node.val === node.left.val) {
        len += ++l;
      } else {
        l = 0;
      }
    }
    if (node.right) {
      r = traverse(node.right);
      if (node.val === node.right.val) {
        len += ++r;
      } else {
        r = 0;
      }
    }

    max = Math.max(max, len);
    return Math.max(l, r);
  };
  if (root) traverse(root);

  return max;
};

module.exports = longestUnivaluePath;
