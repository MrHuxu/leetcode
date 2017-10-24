/**
 * Problem: https://leetcode.com/problems/invert-binary-tree/description/
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
var invertTree = function(root) {
  if (!root) return root;
  
  var tmp;
  var recursion = function (node) {
    var tmp = node.left;
    node.left = node.right;
    node.right = tmp;
    
    if (node.left) recursion(node.left);
    if (node.right) recursion(node.right);
  };
  recursion(root);
  
  return root;
};
module.exports = invertTree;
