package main

func minCostClimbingStairs(cost []int) int {
	dp := make([]int, len(cost)+1)

	for i := 2; i <= len(cost); i++ {
		dp[i] = min(dp[i-1]+cost[i-1], dp[i-2]+cost[i-2])
	}
	return dp[len(cost)]
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
