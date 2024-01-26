/**
 * Problem: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const { TreeNode } = require('../util/javascript/problem-utils');

var buildTree = function (preorder, inorder) {
  const build = (pre, ino) => {
    if (pre.length > 0) {
      const node = new TreeNode(pre[0]);
      const index = ino.indexOf(pre[0]);
      const inLeft = ino.slice(0, index),
        inRight = ino.slice(index + 1),
        preLeft = pre.slice(1, index + 1),
        preRight = pre.slice(index + 1);
      node.left = build(preLeft, inLeft);
      node.right = build(preRight, inRight);
      return node;
    }
    return null;
  };

  return build(preorder, inorder);
};

