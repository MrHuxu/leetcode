/**
 * Problem: https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const { TreeNode } = require('../util/javascript/problem-utils');

var buildTree = function (inorder, postorder) {
  const build = (inArr, postArr) => {
    if (postArr.length) {
      const node = new TreeNode(postArr[postArr.length - 1]);
      const index = inArr.indexOf(postArr[postArr.length - 1]);
      const inArrLeft = inArr.slice(0, index),
        inArrRight = inArr.slice(index + 1),
        postArrLeft = postArr.slice(0, index),
        postArrRight = postArr.slice(index, postArr.length - 1);
      node.left = build(inArrLeft, postArrLeft);
      node.right = build(inArrRight, postArrRight);
      return node;
    }
    return null;
  };

  return build(inorder, postorder);
};

