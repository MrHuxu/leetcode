package main

func minimumTotal(triangle [][]int) int {
	level := triangle[0]

	for i := 1; i < len(triangle); i++ {
		nextLevel := make([]int, len(triangle[i]))

		nextLevel[0] = level[0] + triangle[i][0]
		nextLevel[len(nextLevel)-1] = level[len(level)-1] + triangle[i][len(triangle[i])-1]

		for j := 1; j < len(triangle[i])-1; j++ {
			nextLevel[j] = min(level[j-1], level[j]) + triangle[i][j]
		}

		level = nextLevel
	}

	ans := level[0]
	for i := 1; i < len(level); i++ {
		ans = min(ans, level[i])
	}
	return ans
}

func min(a, b int) int {
	if a < b {
		return a
	}

	return b
}
