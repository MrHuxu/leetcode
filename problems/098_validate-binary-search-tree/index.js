/**
 * Problem: https://leetcode.com/problems/validate-binary-search-tree/description/
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
 * @return {boolean}
 */
var isValidBST = function(root) {
  var flag = true;
  
  var validate = function (node, min, max) {
    if (flag && node) {
      if (node.left) {
        if (max) {
          (node.left.val < node.val && node.left.val > max) ? validate(node.left, node.val, max) : flag = false;
        } else {
          (node.left.val < node.val) ? validate(node.left, node.val, max) : flag = false;
        }
      }
      
      if (node.right) {
        if (min) {
          (node.right.val > node.val && node.right.val < min) ? validate(node.right, min, node.val) : flag = false;
        } else {
          (node.right.val > node.val) ? validate(node.right, min, node.val) : flag = false;
        }
      }
    }
  };
  validate(root, null, null);
  
  return flag;
};
module.exports = isValidBST;
