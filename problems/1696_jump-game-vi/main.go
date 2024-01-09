package main

func maxResult(nums []int, k int) int {
	dp := make([]int, len(nums))

	dp[0] = nums[0]
	queue := []int{nums[0]}
	for i := 1; i < len(nums); i++ {
		dp[i] = queue[0] + nums[i]

		if i-k >= 0 && dp[i-k] == queue[0] {
			queue = queue[1:]
		}

		for len(queue) != 0 && dp[i] > queue[len(queue)-1] {
			queue = queue[:len(queue)-1]
		}
		queue = append(queue, dp[i])
	}
	return dp[len(nums)-1]
}
