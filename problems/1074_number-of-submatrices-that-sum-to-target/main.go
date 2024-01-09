package main

func numSubmatrixSumTarget(matrix [][]int, target int) int {
	var ans int

	m, n := len(matrix), len(matrix[0])
	sum := make([][]int, m)
	for i := range sum {
		sum[i] = make([]int, n)

		tmp := 0
		for j := 0; j < n; j++ {
			tmp += matrix[i][j]

			if i == 0 {
				sum[i][j] = tmp
			} else {
				sum[i][j] = sum[i-1][j] + tmp
			}
		}
	}

	for i := 0; i < m; i++ {
		for j := i; j < m; j++ {
			pre := make(map[int]int)

			for k := 0; k < n; k++ {
				var cur int
				if i == 0 {
					cur = sum[j][k]
				} else {
					cur = sum[j][k] - sum[i-1][k]
				}

				if cur == target {
					ans++
				}

				ans += pre[cur-target]
				pre[cur]++
			}
		}
	}

	return ans
}

func numSubmatrixSumTargetDP(matrix [][]int, target int) int {
	dp := make([][][][]int, len(matrix))

	var ans int
	for m := 1; m <= len(matrix); m++ {
		for n := 1; n <= len(matrix[0]); n++ {
			for i := 0; i <= len(matrix)-m; i++ {
				if dp[i] == nil {
					dp[i] = make([][][]int, len(matrix[0]))
				}

				for j := 0; j <= len(matrix[0])-n; j++ {
					if dp[i][j] == nil {
						dp[i][j] = make([][]int, len(matrix)+1)
					}

					if dp[i][j][m] == nil {
						dp[i][j][m] = make([]int, len(matrix[0])+1)
					}

					if m == 1 && n == 1 {
						dp[i][j][m][n] = matrix[i][j]
					} else if m == 1 {
						dp[i][j][m][n] = dp[i][j][m][n-1] + matrix[i][j+n-1]
					} else if n == 1 {
						dp[i][j][m][n] = dp[i][j][m-1][n] + matrix[i+m-1][j]
					} else {
						dp[i][j][m][n] = dp[i][j][m-1][n-1] + dp[i+m-1][j][1][n] + dp[i][j+n-1][m][1] - matrix[i+m-1][j+n-1]
					}

					if dp[i][j][m][n] == target {
						ans++
					}
				}
			}
		}
	}

	return ans
}
