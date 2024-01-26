package main

func findMaxForm(strs []string, m int, n int) int {
	dp := make([][]int, m+1)
	for i := 0; i <= m; i++ {
		dp[i] = make([]int, n+1)
	}

	for _, str := range strs {
		var cnt0, cnt1 int
		for _, r := range str {
			if r == '0' {
				cnt0++
			} else {
				cnt1++
			}
		}

		for i := m; i >= cnt0; i-- {
			for j := n; j >= cnt1; j-- {
				dp[i][j] = max(dp[i][j], dp[i-cnt0][j-cnt1]+1)
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
