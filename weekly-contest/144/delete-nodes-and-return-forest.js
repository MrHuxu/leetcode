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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
let delNodes = function(root, to_delete) {
  const delM = to_delete.reduce((pre, curr) => {
    pre[curr] = true;
    return pre;
  }, {});

  const result = [];
  const del = (node, inResult) => {
    if (null === node) return null;

    if (!inResult && !delM[node.val]) result.push(node);

    if (delM[node.val]) {
      node.left = del(node.left, false);
      node.right = del(node.right, false);
      return null;
    } else {
      node.left = del(node.left, true);
      node.right = del(node.right, true);
      return node;
    }
  };
  del(root, false);

  return result;
};

it('delete-nodes-and-return-forest', () => {
  expect(delNodes(buildTree([1,2,3,4,5,6,7]), [3, 5])).to.deep.eq([buildTree([1,2,null,4]),buildTree([6]),buildTree([7])]);
  expect(delNodes(buildTree([1, 2, null, 4, 3]), [2, 3])).to.deep.eq([buildTree([1]), buildTree([4])]);
});