/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
let smallestFromLeaf = function(root) {
  const strs = [];
  const traverse = (node, str) => {
    str = String.fromCharCode(97 + node.val) + str;
    if (!node.left && !node.right) strs.push(str);
    
    if (node.left) traverse(node.left, str);
    if (node.right) traverse(node.right, str);
  };
  traverse(root, '');
  return strs.sort()[0];
};

module.exports = smallestFromLeaf;