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
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
let btreeGameWinningMove = function(root, n, x) {
  let val, valL, valR;
  const traverse = node => {
    if (!node) return 0;

    const sumL = traverse(node.left);
    const sumR = traverse(node.right);

    if (node.val === x) {
      valL = sumL;
      valR = sumR;
      val = sumL + sumR + 1;
    }

    return sumL + sumR + 1;
  };
  traverse(root);

  if (val < n / 2) {
    return true;
  } else {
    if (valL > n / 2 || valR > n / 2) {
      return true;
    } else {
      return false;
    }
  }
};

it('binary-tree-coloring-game', () => {
  expect(btreeGameWinningMove(buildTree([1,2,3,4,5,6,7,8,9,10,11]), 11, 3)).to.eq(true);
});