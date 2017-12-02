/**
 * Problem: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/
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
var zigzagLevelOrder = function(root) {
  const result = [];
  if (!root) return result;

  let level = [root], direction = true;
  while (level.length) {
    if (direction) {
      result.push(level.map(node => node.val));
    } else {
      result.push(level.reduce((pre, node) => {
        pre.unshift(node.val);
        return pre;
      }, []));
    }
    direction = !direction;
    const nextLevel = [];
    level.forEach(node => {
      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    });
    level = nextLevel;
  }

  return result;
};

module.exports = zigzagLevelOrder;
