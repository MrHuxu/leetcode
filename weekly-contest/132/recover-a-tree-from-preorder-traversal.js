const { expect } = require('chai');
const { buildTree } = require('../../scripts/problem-utils');
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
 
/**
 * @param {string} S
 * @return {TreeNode}
 */
let recoverFromPreorder = function(S) {
  let nodes = [];
  let len = 0, word = '';
  for (let i = 0; i < S.length; i++) {
    if ('-' === S[i]) {
      if ('-' === S[i - 1]) len++;
      else {
        nodes.push([len, word]);
        len = 1;
        word = '';
      }
    } else {
      word += S[i];
    }
  }
  nodes.push([len, word]);

  const traverse = (ns, depth) => {
    const node = new TreeNode(ns[0][1]);
    let left, right;
    for (let i = 1; i < ns.length; i++) {
      if (ns[i][0] === depth + 1) {
        if (left === undefined) left = i;
        else right = i;
      }
    }

    if (left !== undefined) {
      if (right === undefined) node.left = traverse(ns.slice(left), depth + 1);
      else node.left = traverse(ns.slice(left, right), depth + 1);
    }
    if (right !== undefined) node.right = traverse(ns.slice(right), depth + 1);
    return node;
  };
  return traverse(nodes, 0);
};

describe('', () => {

  it('recover-a-tree-from-preorder-traversal', () => {
    expect(JSON.stringify(recoverFromPreorder('1-2--3--4-5--6--7'))).to.eq(JSON.stringify(buildTree(['1','2','5','3','4','6','7'])));
  });
});
