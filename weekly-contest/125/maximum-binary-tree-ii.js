/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const { TreeNode, buildTree } = require('../../scripts/problem-utils');

let insertIntoMaxTree = function(root, val) {
  const destruct = node => {
    if (!node) return [];

    let arrL = [];
    let arrR = [];
    if (node.left) arrL = destruct(node.left);
    if (node.right) arrR = destruct(node.right);
    return [...arrL, node.val, ...arrR];
  };

  const construct = arr => {
    if (0 === arr.length) return null;

    let maxIdx = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[maxIdx]) maxIdx = i;
    }

    const node = new TreeNode(arr[maxIdx]);
    node.left = construct(arr.slice(0, maxIdx));
    node.right = construct(arr.slice(maxIdx + 1));
    return node;
  };

  const arr = destruct(root);
  return construct([...arr, val]);
};

console.log(insertIntoMaxTree(buildTree([4, 1, 3, null, null, 2]), 5));
console.log(insertIntoMaxTree(buildTree([5, 2, 4, null, 1]), 3));
console.log(insertIntoMaxTree(buildTree([5, 2, 3, null, 1]), 4));