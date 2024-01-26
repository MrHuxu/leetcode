package main

func longestIncreasingPath(matrix [][]int) int {
	dp := make([][]int, len(matrix))
	for i := range matrix {
		dp[i] = make([]int, len(matrix[i]))
	}

	var ans int

	var dfs func(int, int)
	dfs = func(i, j int) {
		tmp := 1

		if i > 0 && matrix[i-1][j] > matrix[i][j] {
			if dp[i-1][j] == 0 {
				dfs(i-1, j)
			}

			tmp = max(tmp, dp[i-1][j]+1)
		}

		if i < len(matrix)-1 && matrix[i+1][j] > matrix[i][j] {
			if dp[i+1][j] == 0 {
				dfs(i+1, j)
			}

			tmp = max(tmp, dp[i+1][j]+1)
		}

		if j > 0 && matrix[i][j-1] > matrix[i][j] {
			if dp[i][j-1] == 0 {
				dfs(i, j-1)
			}

			tmp = max(tmp, dp[i][j-1]+1)
		}

		if j < len(matrix[0])-1 && matrix[i][j+1] > matrix[i][j] {
			if dp[i][j+1] == 0 {
				dfs(i, j+1)
			}

			tmp = max(tmp, dp[i][j+1]+1)
		}

		dp[i][j] = tmp
		ans = max(dp[i][j], ans)
	}

	for i := range matrix {
		for j := range matrix[i] {
			dfs(i, j)
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
