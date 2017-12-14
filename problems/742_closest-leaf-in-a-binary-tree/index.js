/**
 * Problem: https://leetcode.com/problems/closest-leaf-in-a-binary-tree/description/
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
 * @return {number}
 */
var findClosestLeaf = function(root, k) {
  let targetDepth;
  const expandTree = (node, depth) => {
    if (node) {
      node.depth = depth;
      node.left = expandTree(node.left, depth + 1);
      node.right = expandTree(node.right, depth + 1);
      if (node.val === k) {
        targetDepth = depth;
        node.targetInChildren = true;
      } else {
        node.targetInChildren = (node.left && node.left.targetInChildren) || (node.right && node.right.targetInChildren);
      }
      return node;
    } else return null;
  };
  expandTree(root, 0);

  let min = Number.MAX_SAFE_INTEGER, result;
  const traverse = (node, targetInParent, plusDepth) => {
    if (node) {
      if (!node.left && !node.right) {
        const subDepth = (targetInParent || node.val === k) ? (node.depth - targetDepth) : node.depth + plusDepth;
        if (subDepth < min) {
          min = subDepth;
          result = node.val;
        }
      } else {
        const newTargetInParent = targetInParent || node.val === k;
        const newPlusDepth = newTargetInParent ? 0 : (node.targetInChildren ? targetDepth - node.depth * 2 : plusDepth);
        traverse(node.left, newTargetInParent, newPlusDepth);
        traverse(node.right, newTargetInParent, newPlusDepth);
      }
    }
  };
  traverse(root, false, 0);

  return result;
};

module.exports = findClosestLeaf;
