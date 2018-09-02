/**
 * Problem: https://leetcode.com/problems/increasing-order-search-tree/description/
 */

const { TreeNode } = require('../../scripts/problem-utils');

const increasingOrderSearchTree = root => {
  if (!root) return null;

  let res = new TreeNode(null);
  const head = res;
  const traverse = node => {
    if (node.left) traverse(node.left);
    const newNode = new TreeNode(node.val);
    res.right = newNode;
    res = res.right;
    if (node.right) traverse(node.right);
  };
  traverse(root);

  return head.right;
};

module.exports = increasingOrderSearchTree;
