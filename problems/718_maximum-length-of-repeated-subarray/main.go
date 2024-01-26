package main

func findLength(nums1 []int, nums2 []int) int {
	dp := make([][]int, len(nums1)+1)
	for i := range dp {
		dp[i] = make([]int, len(nums2)+1)
	}

	var ans int
	for i := 0; i <= len(nums1); i++ {
		for j := 0; j <= len(nums2); j++ {
			if i == 0 || j == 0 {
				dp[i][j] = 0
				continue
			}

			if nums1[i-1] == nums2[j-1] {
				dp[i][j] = dp[i-1][j-1] + 1
			} else {
				dp[i][j] = 0
			}
			ans = max(ans, dp[i][j])
		}
	}

	return ans
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
