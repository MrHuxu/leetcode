package main

func combinationSum4(nums []int, target int) int {
	dp := make(map[int]int)
	for _, num := range nums {
		dp[num] = 1
	}

	for i := 1; i <= target; i++ {
		for _, num := range nums {
			dp[i] += dp[i-num]
		}
	}

	return dp[target]
}
