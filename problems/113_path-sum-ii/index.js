/**
 * Problem: https://leetcode.com/problems/path-sum-ii/description/
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if (!root) return [];

  var tmp, result = [];

  var dfs = function (node, arr, current) {
    if (!node.left && !node.right) {
      if (node.val + current === sum) {
        arr.push(node.val);
        result.push(arr);
        return;
      }
    } else {
      if (node.left) {
        tmp = arr.slice(0);
        tmp.push(node.val);
        dfs(node.left, tmp, node.val + current);
      }

      if (node.right) {
        tmp = arr.slice(0);
        tmp.push(node.val);
        dfs(node.right, tmp, node.val + current);
      }
    }
  };
  dfs(root, [], 0);

  return result;
};
module.exports = pathSum;
