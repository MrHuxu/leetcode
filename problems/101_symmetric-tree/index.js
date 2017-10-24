/**
 * Problem: https://leetcode.com/problems/symmetric-tree/description/
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
var isSymmetric = function(root) {
  if (!root) return true;

  const compare = (l, r) => {
    return (!l && !r) || ((l && r) && l.val === r.val && compare(l.left, r.right) && compare(l.right, r.left));
  };

  return !!compare(root.left, root.right);
};
module.exports = isSymmetric;
