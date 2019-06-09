const { expect } = require('chai');
const { buildTree } = require('../../scripts/problem-utils');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} limit
 * @return {TreeNode}
 */
let sufficientSubset = function(root, limit) {
  const dfs = (node, sum) => {
    if (!node.left && !node.right) {
      if (node.val + sum >= limit) {
        return node;
      }
      return null;
    }

    if (node.left) node.left = dfs(node.left, node.val + sum);
    if (node.right) node.right = dfs(node.right, node.val + sum);

    if (!node.left && !node.right) {
      return null;
    }
    return node;
  };
  return dfs(root, 0);
};

it('insufficient-nodes-in-root-to-leaf-paths', () => {
  expect(sufficientSubset(buildTree([5,4,8,11,null,17,4,7,1,null,null,5,3]), 22)).to.deep.eq(buildTree([1,2,3,4,null,null,7,8,9,null,14]));
});