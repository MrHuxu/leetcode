package main

func countSquares(matrix [][]int) int {
	if len(matrix) == 0 || len(matrix[0]) == 0 {
		return 0
	}

	dp := make([][]int, len(matrix))
	for i := range dp {
		dp[i] = make([]int, len(matrix[0]))
	}

	var result int

	for i := 0; i < len(matrix); i++ {
		for j := 0; j < len(matrix[i]); j++ {
			if matrix[i][j] == 0 {
				continue
			}

			if i >= 1 && j >= 1 {
				dp[i][j] = min(dp[i-1][j-1], min(dp[i-1][j], dp[i][j-1])) + 1
			} else {
				dp[i][j] = 1
			}

			result += dp[i][j]
		}
	}

	return result
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func main() {
	println(countSquares([][]int{
		[]int{0, 1, 1, 1},
		[]int{1, 1, 1, 1},
		[]int{0, 1, 1, 1},
	}))
	println(countSquares([][]int{
		[]int{1, 0, 1},
		[]int{1, 1, 0},
		[]int{1, 1, 0},
	}))
	println(countSquares([][]int{
		[]int{1, 1, 1, 0},
		[]int{1, 0, 1, 0},
		[]int{1, 1, 1, 1},
	}))
	println(countSquares([][]int{
		[]int{1, 1, 0},
		[]int{1, 1, 1},
		[]int{0, 1, 1},
	}))
}
