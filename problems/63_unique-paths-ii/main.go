package main

func uniquePathsWithObstacles(obstacleGrid [][]int) int {
	dp := make([][]int, len(obstacleGrid))
	for i := range obstacleGrid {
		dp[i] = make([]int, len(obstacleGrid[i]))
	}

	for i := 0; i < len(obstacleGrid); i++ {
		for j := 0; j < len(obstacleGrid[i]); j++ {
			if obstacleGrid[i][j] == 1 {
				continue
			}

			if i == 0 && j == 0 {
				dp[i][j] = 1
				continue
			}

			if i > 0 {
				dp[i][j] += dp[i-1][j]
			}
			if j > 0 {
				dp[i][j] += dp[i][j-1]
			}
		}
	}

	return dp[len(dp)-1][len(dp[0])-1]
}
