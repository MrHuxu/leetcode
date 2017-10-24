/**
 * Problem: https://leetcode.com/problems/convert-bst-to-greater-tree/description/
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
 * @return {TreeNode}
 */
var convertBST = function (root) {
  var sum = 0;

  var traverse = function (node) {
    if (!node) return null;

    traverse(node.right);
    node.val += sum;
    sum = node.val;
    traverse(node.left);

    return node;
  };
  traverse(root);

  return root;
};

module.exports = convertBST;
