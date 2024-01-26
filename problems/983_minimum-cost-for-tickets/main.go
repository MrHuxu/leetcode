package main

import (
	"fmt"
	"testing"
)

func mincostTickets(days []int, costs []int) int {
	dp := make([]int, days[len(days)-1]+1)
	for _, day := range days {
		dp[day] = costs[0]
	}

	for i := 1; i <= days[len(days)-1]; i++ {
		if dp[i] == 0 {
			dp[i] = dp[i-1]
			continue
		}

		dp[i] = dp[i-1] + costs[0]
		if i-7 >= 0 {
			dp[i] = min(dp[i], dp[i-7]+costs[1])
		} else {
			dp[i] = min(dp[i], dp[0]+costs[1])
		}
		if i-30 >= 0 {
			dp[i] = min(dp[i], dp[i-30]+costs[2])
		} else {
			dp[i] = min(dp[i], dp[0]+costs[2])
		}
	}
	return dp[days[len(days)-1]]
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func Test983(t *testing.T) {
	fmt.Println(mincostTickets([]int{1, 4, 6, 7, 8, 20}, []int{2, 7, 15}))
	fmt.Println(mincostTickets([]int{1, 4, 6, 7, 8, 20}, []int{7, 2, 15}))
	fmt.Println(mincostTickets([]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31}, []int{2, 7, 15}))
	t.Error()
}
