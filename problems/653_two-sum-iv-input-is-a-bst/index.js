/**
 * Problem: https://leetcode.com/problems/two-sum-iv-input-is-a-bst/description/
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const traverse = (left, right) => {
    if (left && right) {
      const sum = left.val + right.val;

      if (sum === k) {
        if (left === right) {
          return traverse(left.left, right) || traverse(left, right.right) || false;
        } else {
          return true;
        }
      } else {
        if (sum < k) {
          return traverse(left.right, right) || traverse(left, right.right) || false;
        } else {
          return traverse(left.left, right) || traverse(left, right.left) || false;
        }
      }
    }
  };

  return traverse(root, root);
};

module.exports = findTarget;
