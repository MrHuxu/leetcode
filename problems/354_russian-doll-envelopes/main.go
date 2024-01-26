package main

import (
	"sort"
)

func maxEnvelopes(envelopes [][]int) int {
	sort.Slice(envelopes, func(i, j int) bool {
		return envelopes[i][0] < envelopes[j][0]
	})

	var ans int

	dp := make([]int, len(envelopes))
	for i := 0; i < len(envelopes); i++ {
		dp[i] = 1

		for j := i - 1; j >= 0; j-- {
			if envelopes[i][0] > envelopes[j][0] && envelopes[i][1] > envelopes[j][1] {
				dp[i] = max(dp[i], dp[j]+1)
			}
		}

		ans = max(ans, dp[i])
	}

	return ans
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
