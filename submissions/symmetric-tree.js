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
var isSymmetric = function(root) {
  var i, j, lowerNodes, flag;

  var compare = function (nodes) {
    if (!nodes.length) return;

    flag = true;
    for (var i = 0, j = nodes.length - 1; i <= j; ++i, --j) {
      if (!((!nodes[i] && !nodes[j]) || (nodes[i] && nodes[j] && nodes[i].val === nodes[j].val))) {
        flag = false;
        break;
      }
    }
    lowerNodes = [];
    nodes.forEach(function (node) {
      if (node) {
        lowerNodes.push(node.left);
        lowerNodes.push(node.right);
      }
    });

    console.log(lowerNodes);
    if (flag) compare(lowerNodes);
  }
  compare([root]);

  return flag;
};