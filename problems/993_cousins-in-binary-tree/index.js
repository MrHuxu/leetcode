/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
let isCousins = function(root, x, y) {
  const nodes = {};
  const traverse = (node, depth, parent) => {
    nodes[node.val] = { depth, parent };
    if (node.left) traverse(node.left, depth + 1, node.val);
    if (node.right) traverse(node.right, depth + 1, node.val);
  };
  traverse(root, 0, undefined);

  return nodes[x].depth === nodes[y].depth && nodes[x].parent !== nodes[y].parent;
};

module.exports = isCousins;