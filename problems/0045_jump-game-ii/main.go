package main

func jump(nums []int) int {
	dp := make([]int, len(nums))
	dp[0] = 0

	for i := 1; i < len(nums); i++ {
		dp[i] = i
		for j := i - 1; j >= 0; j-- {
			if nums[j] >= i-j {
				dp[i] = min(dp[i], dp[j]+1)
			}
		}
	}
	return dp[len(nums)-1]
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
