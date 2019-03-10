/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
const { TreeNode } = require('../../scripts/problem-utils');

let bstFromPreorder = function(preorder) {
  if (0 === preorder.length) return null;

  let i;
  for (i = 1; i < preorder.length; i++) {
    if (preorder[i] > preorder[0]) break;
  }

  const node = new TreeNode(preorder[0]);
  node.left = bstFromPreorder(preorder.slice(1, i));
  node.right = bstFromPreorder(preorder.slice(i));
  return node;
};

console.log(bstFromPreorder([8,5,1,7,10,12]));