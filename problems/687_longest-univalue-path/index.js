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
var longestUnivaluePath = function(root) {
  let max = 0;

  const traverse = node => {
    let len = 0;
    if (node.left) {
      if (node.val === node.left.val) {
        len += traverse(node.left) + 1;
      } else {
        traverse(node.left);
      }
    }
    if (node.right) {
      if (node.val === node.right.val) {
        len += traverse(node.right) + 1;
      } else {
        traverse(node.right);
      }
    }
    max = Math.max(max, len);
    return len;
  };
  if (root) traverse(root);

  return max;
};

module.exports = longestUnivaluePath;
