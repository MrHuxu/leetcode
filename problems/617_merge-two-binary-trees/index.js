/**
 * Problem: https://leetcode.com/problems/merge-two-binary-trees/description/
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
const { TreeNode } = require('../../scripts/problem-utils');

var mergeTrees = function(t1, t2) {
  const traverse = (src1, src2, dist) => {
    const num1 = null === src1 ? 0 : src1.val;
    const num2 = null === src2 ? 0 : src2.val;
    dist.val = num1 + num2;

    if ((src1 && src1.left !== null) || (src2 && src2.left !== null)) {
      dist.left = new TreeNode(null);
      traverse((src1 && src1.left), (src2 && src2.left), dist.left);
    }

    if ((src1 && src1.right !== null) || (src2 && src2.right !== null)) {
      dist.right = new TreeNode(null);
      traverse((src1 && src1.right), (src2 && src2.right), dist.right);
    }

    return dist;
  };

  if (!t1 && !t2) return null;
  return traverse(t1, t2, new TreeNode(null));
};

module.exports = mergeTrees;
