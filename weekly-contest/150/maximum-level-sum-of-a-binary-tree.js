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
 * @return {number}
 */
let maxLevelSum = function(root) {
  const arr = [];
  const traverse = (node, depth) => {
    arr[depth] = arr[depth] === undefined ? node.val : arr[depth] + node.val;

    if (node.left) traverse(node.left, depth + 1);
    if (node.right) traverse(node.right, depth + 1);
  };
  traverse(root, 1);

  let max, maxLv;
  for (let i = 1; i <= arr.length; i++) {
    if (maxLv === undefined) {
      max = arr[i];
      maxLv = i;
    } else if (arr[i] > max){
      max = arr[i];
      maxLv = i;
    }
  }
  return maxLv;
};

it('maximum-level-sum-of-a-binary-tree', () => {
  expect(maxLevelSum(buildTree([1,7,0,7,-8,null,null]))).to.eq(2);
});