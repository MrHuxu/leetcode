package main

import (
	"fmt"
	"testing"
)

func maxUncrossedLines(nums1 []int, nums2 []int) int {
	m, n := len(nums1), len(nums2)
	dp := make([][]int, m+1)
	for i := range dp {
		dp[i] = make([]int, n+1)
	}

	for i := 0; i <= m; i++ {
		for j := 0; j <= n; j++ {
			if i == 0 || j == 0 {
				continue
			}

			dp[i][j] = max(dp[i-1][j], dp[i][j-1])
			if nums1[i-1] == nums2[j-1] {
				dp[i][j] = max(dp[i-1][j-1]+1, dp[i][j])
			}
		}
	}

	return dp[m][n]
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func Test1035(t *testing.T) {
	fmt.Println(maxUncrossedLines([]int{1, 4, 2}, []int{1, 2, 4}))
	fmt.Println(maxUncrossedLines([]int{2, 5, 1, 2, 5}, []int{10, 5, 2, 1, 5, 2}))
	fmt.Println(maxUncrossedLines([]int{1, 3, 7, 1, 7, 5}, []int{1, 9, 2, 5, 1}))
	t.Error()
}
