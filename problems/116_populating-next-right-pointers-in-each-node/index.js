/**
 * Problem: https://leetcode.com/problems/populating-next-right-pointers-in-each-node/description/
 */
/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
  if (!root) return;
  var traversal = function (nodes) {
    if (!nodes.length) return;

    var lowerNodes = [];
    for (var i = 0, len = nodes.length; i < len; ++i) {
      nodes[i].next = nodes[i + 1] ? nodes[i + 1] : null;
      if (nodes[i].left) lowerNodes.push(nodes[i].left);
      if (nodes[i].right) lowerNodes.push(nodes[i].right);
    }
    traversal(lowerNodes);
  };
  traversal([root]);
};
module.exports = connect;
