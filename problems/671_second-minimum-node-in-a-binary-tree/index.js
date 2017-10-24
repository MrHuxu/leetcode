/**
 * Problem: https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/description/
 */
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
var findSecondMinimumValue = function(root) {
  if (!root) return -1;
  let level = [root];
  let nodes = [];

  while (level.length) {
    let tmp = [];
    for (let n of level) {
      if (n.left) tmp.push(n.left);
      if (n.right) tmp.push(n.right);
    }
    nodes = nodes.concat(tmp);
    level = tmp;
  }

  let minimal;
  while (nodes.length) {
    let tmp;

    for (let i = parseInt((nodes.length) / 2, 10); i >= 1; --i) {
      if (nodes[i - 1].val > nodes[i * 2 - 1].val) {
        tmp = nodes[i - 1];
        nodes[i - 1] = nodes[i * 2 - 1];
        nodes[i * 2 - 1] = tmp;
      }

      if (nodes[i * 2] && nodes[i - 1].val > nodes[i * 2 - 1].val) {
        tmp = nodes[i - 1];
        nodes[i - 1] = nodes[i * 2];
        nodes[i * 2] = tmp;
      }
    }

    tmp = nodes.shift();
    if (minimal === undefined) {
      minimal = tmp.val;
    } else if (tmp.val > minimal) {
      return tmp.val;
    }
  }
  return -1;
};
module.exports = findSecondMinimumValue;
