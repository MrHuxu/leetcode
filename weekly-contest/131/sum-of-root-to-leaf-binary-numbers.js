/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const { buildTree } = require('../../scripts/problem-utils');

/**
 * @param {TreeNode} root
 * @return {number}
 */
let sumRootToLeaf = function(root) {
  let sum = 0;
  const traverse = (node, pre) => {
    const curr = (pre << 1) + node.val;
    
    if (!node.left && !node.right) {
      sum += curr;
    } else {
      if (node.left) traverse(node.left, curr);
      if (node.right) traverse(node.right, curr);
    }
  };
  traverse(root, 0);

  return sum;
};

console.log(sumRootToLeaf(buildTree([1,0,1,0,1,0,1])));