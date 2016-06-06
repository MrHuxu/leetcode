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
          if (node.left.val < node.val && node.left.val > max)
            validate(node.left, node.val, max);
          else
            flag = false;
        } else {
          if (node.left.val < node.val)
            validate(node.left, node.val, max);
          else
            flag = false;
        }
      }
      
      if (node.right) {
        if (min) {
          if (node.right.val > node.val && node.right.val < min)
            validate(node.right, min, node.val);
          else
            flag = false;
        } else {
          if (node.right.val > node.val)
            validate(node.right, min, node.val);
          else
            flag = false;
        }
      }
    }
  }
  validate(root, null, null);
  
  return flag;
};