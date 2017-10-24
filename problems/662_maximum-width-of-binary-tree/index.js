/**
 * Problem: https://leetcode.com/problems/maximum-width-of-binary-tree/description/
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
var widthOfBinaryTree = function(root) {
  let result = Number.MIN_SAFE_INTEGER, level = [root];
  while (level.length) {
    let i = 0, j = level.length - 1;
    while (j && !level[j]) --j;
    while (i < level.length && !level[i]) ++i;
    level = level.slice(i, j + 1);

    result = Math.max(result, level.length);

    const nextLevel = [];
    for (let node of level) {
      if (node) {
        nextLevel.push(node.left, node.right);
      } else {
        nextLevel.push(null, null);
      }
    }
    level = nextLevel;
  }

  return result;
};
module.exports = widthOfBinaryTree;
