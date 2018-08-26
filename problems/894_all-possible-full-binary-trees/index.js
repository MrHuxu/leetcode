/**
 * Problem: https://leetcode.com/problems/all-possible-full-binary-trees/description/
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const allPossibleFullBinaryTrees = N => {
  if (0 === N % 2) return [];

  const dp = [[], [new TreeNode(0)]];
  for (let i = 2; i <= N; i++) {
    if (0 === i % 2) dp.push([]);
    else {
      dp[i] = [];
      for (let j = 1; j <= (i - 1) / 2; j++) {
        for (let node1 of dp[j]) {
          for (let node2 of dp[i - 1 - j]) {
            const root1 = new TreeNode(0);
            root1.left = node1;
            root1.right = node2;
            dp[i].push(root1);

            if (j !== (i - 1) / 2) {
              const root2 = new TreeNode(0);
              root2.left = node2;
              root2.right = node1;
              dp[i].push(root2);
            }
          }
        }
      }
    }
  }

  return dp[N];
};

module.exports = allPossibleFullBinaryTrees;
