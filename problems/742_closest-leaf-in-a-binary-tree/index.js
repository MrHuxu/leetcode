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
  const NewTreeNode = function(val, depth) {
    this.val = val;
    this.left = this.right = null;
    this.targetInChildren = false;
    this.depth = depth;
  };

  let targetDepth;
  const buildNewTree = (node, depth) => {
    if (node) {
      const newNode = new NewTreeNode(node.val, depth);
      newNode.left = buildNewTree(node.left, depth + 1);
      newNode.right = buildNewTree(node.right, depth + 1);
      if (node.val === k) {
        targetDepth = depth;
        newNode.targetInChildren = true;
      } else {
        newNode.targetInChildren = (newNode.left && newNode.left.targetInChildren) || !!(newNode.right && newNode.right.targetInChildren);
      }
      return newNode; 
    } else return null;
  };
  const newRoot = buildNewTree(root, 0);

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
  traverse(newRoot, false, 0);

  return result;
};

module.exports = findClosestLeaf;
