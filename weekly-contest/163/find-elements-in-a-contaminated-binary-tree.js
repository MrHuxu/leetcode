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
 */
let FindElements = function(root) {
  this.tree = root;

  if (!root) return;

  const traverse = node => {
    if (node.left) {
      node.left.val = node.val * 2 + 1;
      traverse(node.left);
    }
    if (node.right) {
      node.right.val = node.val * 2 + 2;
      traverse(node.right);
    }
  };
  root.val = 0;
  traverse(root);
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
  const arr = [];
  while (target) {
    arr.unshift(target);
    target = (target - (target % 2 ? 1 : 2)) / 2;
  }

  let tmp = this.tree;
  for (let val of arr) {
    let found = false;

    if (tmp.left && tmp.left.val == val) {
      found = true;
      tmp = tmp.left;
    }

    if (!found && tmp.right && tmp.right.val == val) {
      found = true;
      tmp = tmp.right;
    }

    if (!found) return false;
  }

  return true;
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */

it('find-elements-in-a-contaminated-binary-tree', () => {
  const fe = new FindElements(buildTree([-1,-1,-1,-1,-1]));
  expect(fe.find(1)).to.eq(true);
  expect(fe.find(3)).to.eq(true);
  expect(fe.find(5)).to.eq(false);
});