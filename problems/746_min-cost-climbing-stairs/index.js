/**
 * Problem: https://leetcode.com/problems/min-cost-climbing-stairs/description/
 */

const minCostClimbingStairs = cost => {
  const costs = cost.reduce((dp, c, i) => {
    dp[i] = Math.min(dp[i - 1] || 0, dp[i - 2] || 0) + c;
    return dp;
  }, []);

  return Math.min(costs[costs.length - 1], costs[costs.length - 2]);
};

module.exports = minCostClimbingStairs;
