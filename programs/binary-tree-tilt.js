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
var findTilt = function (root) {
  var sum = 0;
  var traverse = function (node) {
    if (!node) return 0;

    var leftSum = traverse(node.left);
    var rightSum = traverse(node.right);
    sum += Math.abs(leftSum - rightSum);

    node.sum = node.val + leftSum + rightSum;
    return node.sum;
  };
  traverse(root);

  return sum;
};

console.log(findTilt({
  val: 1,
  left: {
    val: 2
  },
  right: {
    val: 3
  }
}));