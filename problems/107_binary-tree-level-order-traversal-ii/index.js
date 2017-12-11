/**
 * Problem: https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) return [];

  let level = [root];
  const result = [];
  while (level.length) {
    const nextLevel = [], arr = [];
    level.forEach(node => {
      arr.push(node.val);
      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    });
    result.push(arr);
    level = nextLevel;
  }

  return result.reverse();
};

module.exports = levelOrderBottom;
