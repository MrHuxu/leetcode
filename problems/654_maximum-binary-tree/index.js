/**
 * Problem: https://leetcode.com/problems/maximum-binary-tree/description/
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

const { TreeNode } = require('../../scripts/problem-utils');

var constructMaximumBinaryTree = function(nums) {
  const idxs = nums.reduce((pre, num, i) => {
    pre[num] = i;
    return pre;
  }, {});
  const { max } = Math;

  const build = (i, j) => {
    const val = max(...nums.slice(i, j));
    const node = new TreeNode(val);
    const idx = idxs[val];
    node.left = idx > i ? build(i, idx) : null;
    node.right = j > idx + 1 ? build(idx + 1, j) : null;

    return node;
  };

  return build(0, nums.length);
};

module.exports = constructMaximumBinaryTree;
