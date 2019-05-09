const { expect } = require('chai');
const { buildTree, TreeNode } = require('../../scripts/problem-utils');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

let bstToGst = function(root) {
  const traverse = (node, preSum) => {
    const n = new TreeNode(node.val + preSum);

    let leftSum = 0, rightSum = 0;
    if (node.right) [ n.right, rightSum ] = traverse(node.right, preSum);
    n.val += rightSum;

    if (node.left) [ n.left, leftSum ] = traverse(node.left, n.val);

    return [n, leftSum + node.val + rightSum];
  };

  return traverse(root, 0)[0];
};

it('binary-search-tree-to-greater-sum-tree', () => {
  expect(JSON.stringify(bstToGst(buildTree([4,1,6,0,2,5,7,null,null,null,3,null,null,null,8])))).to.deep.eq(JSON.stringify(buildTree([30,36,21,36,35,26,15,null,null,null,33,null,null,null,8])));
});