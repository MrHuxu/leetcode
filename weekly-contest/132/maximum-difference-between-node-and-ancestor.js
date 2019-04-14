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
const { expect } =  require('chai');
const { buildTree } = require('../../scripts/problem-utils');

let maxAncestorDiff = function(root) {
  let result = 0;
  const traverse = (node, max, min) => {
    if (max !== undefined) result = Math.max(result, Math.abs(max - node.val));
    if (min !== undefined) result = Math.max(result, Math.abs(min - node.val));

    if (node.left) traverse(node.left, (max === undefined ? node.val : Math.max(max, node.val)), (min === undefined ? node.val : Math.min(min, node.val)));
    if (node.right) traverse(node.right, (max === undefined ? node.val : Math.max(max, node.val)), (min === undefined ? node.val : Math.min(min, node.val)));
  };
  traverse(root, undefined, undefined);

  return result;
};

describe('', () => {
  it('maximum-difference-between-node-and-ancestor', () => {
    expect(maxAncestorDiff(buildTree([8,3,10,1,6,null,14,null,null,4,7,13]))).to.eq(7);
  });
});