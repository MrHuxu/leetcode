package main

import (
	"fmt"
	"testing"
)

func profitableSchemes(n int, minProfit int, group []int, profit []int) int {
	dp := make([][]int, n+1)
	for i := range dp {
		dp[i] = make([]int, minProfit+1)
	}
	dp[0][0] = 1
	for i := 0; i < len(group); i++ {
		for j := n - group[i]; j >= 0; j-- {
			for k := minProfit; k >= 0; k-- {
				dp[j+group[i]][min(k+profit[i], minProfit)] = (dp[j+group[i]][min(k+profit[i], minProfit)] + dp[j][k]) % 1000000007
			}
		}
	}
	ret := 0
	for i := 0; i <= n; i++ {
		ret = (ret + dp[i][minProfit]) % 1000000007
	}
	return ret
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func profitableSchemesDFS(n int, minProfit int, group []int, profit []int) int {
	ret := dfs(0, n, minProfit, group, profit)
	if minProfit == 0 {
		ret++
	}
	return ret % 1000000007
}

func dfs(i int, n int, minProfit int, group []int, profit []int) int {
	if i == len(group) {
		return 0
	}

	var ret int
	for j := i; j < len(group); j++ {
		if n >= group[j] {
			if profit[j] >= minProfit {
				ret++
			}
			ret += dfs(j+1, n-group[j], minProfit-profit[j], group, profit)
		}
	}
	return ret % 1000000007
}

func Test879(t *testing.T) {
	fmt.Println(profitableSchemes(5, 3, []int{2, 2}, []int{2, 3}))
	fmt.Println(profitableSchemes(10, 5, []int{2, 3, 5}, []int{6, 7, 8}))
	fmt.Println(profitableSchemes(64, 0, []int{80, 40}, []int{88, 88}))
	fmt.Println(profitableSchemes(64, 0, []int{1}, []int{1000000000}))
	fmt.Println(profitableSchemes(95, 53, []int{82, 7, 18, 34, 1, 3, 83, 56, 50, 34, 39, 38, 76, 92, 71, 2, 6, 74, 1, 82, 22, 73, 88, 98, 6, 71, 6, 26, 100, 75, 57, 88, 43, 16, 22, 89, 7, 9, 78, 97, 22, 87, 34, 81, 74, 56, 49, 94, 87, 71, 59, 6, 20, 66, 64, 37, 2, 42, 30, 87, 73, 16, 39, 87, 28, 9, 95, 78, 43, 59, 87, 78, 2, 93, 7, 22, 21, 59, 68, 67, 65, 63, 78, 20, 82, 35, 86}, []int{45, 57, 38, 64, 52, 92, 31, 57, 31, 52, 3, 12, 93, 8, 11, 60, 55, 92, 42, 27, 40, 10, 77, 53, 8, 34, 87, 39, 8, 35, 28, 70, 32, 97, 88, 54, 82, 54, 54, 10, 78, 23, 82, 52, 10, 49, 8, 36, 9, 52, 81, 26, 5, 2, 30, 39, 89, 62, 39, 100, 67, 33, 86, 22, 49, 15, 94, 59, 47, 41, 45, 17, 99, 87, 77, 48, 22, 77, 82, 85, 97, 66, 3, 38, 49, 60, 66}))
	fmt.Println(profitableSchemes(100, 100, []int{2, 5, 36, 2, 5, 5, 14, 1, 12, 1, 14, 15, 1, 1, 27, 13, 6, 59, 6, 1, 7, 1, 2, 7, 6, 1, 6, 1, 3, 1, 2, 11, 3, 39, 21, 20, 1, 27, 26, 22, 11, 17, 3, 2, 4, 5, 6, 18, 4, 14, 1, 1, 1, 3, 12, 9, 7, 3, 16, 5, 1, 19, 4, 8, 6, 3, 2, 7, 3, 5, 12, 6, 15, 2, 11, 12, 12, 21, 5, 1, 13, 2, 29, 38, 10, 17, 1, 14, 1, 62, 7, 1, 14, 6, 4, 16, 6, 4, 32, 48}, []int{21, 4, 9, 12, 5, 8, 8, 5, 14, 18, 43, 24, 3, 0, 20, 9, 0, 24, 4, 0, 0, 7, 3, 13, 6, 5, 19, 6, 3, 14, 9, 5, 5, 6, 4, 7, 20, 2, 13, 0, 1, 19, 4, 0, 11, 9, 6, 15, 15, 7, 1, 25, 17, 4, 4, 3, 43, 46, 82, 15, 12, 4, 1, 8, 24, 3, 15, 3, 6, 3, 0, 8, 10, 8, 10, 1, 21, 13, 10, 28, 11, 27, 17, 1, 13, 10, 11, 4, 36, 26, 4, 2, 2, 2, 10, 0, 11, 5, 22, 6}))
	t.Error()
}
