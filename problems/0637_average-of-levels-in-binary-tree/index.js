/**
 * Problem: https://leetcode.com/problems/average-of-levels-in-binary-tree/description/
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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  if (!root) return [];

  const result = [];
  let nodes = [root], sum = root.val;
  while (nodes.length) {
    result.push(sum / nodes.length);

    const nextNodes = [];
    sum = 0;
    for (let node of nodes) {
      if (node.left) {
        nextNodes.push(node.left);
        sum += node.left.val;
      }
      if (node.right) {
        nextNodes.push(node.right);
        sum += node.right.val;
      }
    }
    nodes = nextNodes;
  }

  return result;
};

