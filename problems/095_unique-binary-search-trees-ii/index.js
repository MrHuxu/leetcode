/**
 * Problem: https://leetcode.com/problems/unique-binary-search-trees-ii/description/
 */

const { TreeNode } = require('../../scripts/problem-utils');

const uniqueBinarySearchTreesIi = num => {
  const arr = [];
  for (let i = 1; i <= num; i++) arr.push(i);

  const build = (i, j) => {
    const result = [];
    for (let k = i; k <= j; k++) {
      if (k === i && k === j) {
        result.push(new TreeNode(arr[k]));
      } else if (k === i) {
        for (let rightChild of build(k + 1, j)) {
          const node = new TreeNode(arr[k]);
          node.right = rightChild;
          result.push(node);
        }
      } else if (k === j) {
        for (let leftChild of build(i, k - 1)) {
          const node = new TreeNode(arr[k]);
          node.left = leftChild;
          result.push(node);
        }
      } else {
        for (let leftChild of build(i, k - 1)) {
          for (let rightChild of build(k + 1, j)) {
            const node = new TreeNode(arr[k]);
            node.left = leftChild;
            node.right = rightChild;
            result.push(node);
          }
        }
      }
    }

    return result;
  };

  return build(0, arr.length - 1);
};

module.exports = uniqueBinarySearchTreesIi;
