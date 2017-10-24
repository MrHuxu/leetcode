/**
 * Problem: https://leetcode.com/problems/most-frequent-subtree-sum/description/
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
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
  if (!root) return [];
  var times = {}, maxTime = 0;

  var visit = function (node) {
    if (!node)
      return 0;
    else {
      node.val += visit(node.left) + visit(node.right);
      times[node.val] = times[node.val] ? ++times[node.val] : 1;
      maxTime = Math.max(maxTime, times[node.val]);
      return node.val;
    }
  };
  visit(root);

  return Object.keys(times).reduce(function (pre, curr) {
    if (times[curr] === maxTime) pre.push(Number(curr));
    return pre;
  }, []);
};

module.exports = findFrequentTreeSum;
