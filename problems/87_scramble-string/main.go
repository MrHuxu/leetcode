package main

// code
func isScramble(s1, s2 string) bool {
	if len(s1) != len(s2) {
		return false
	}
	len := len(s1)

	dp := make([][][]bool, len)
	for i := range dp {
		dp[i] = make([][]bool, len)
		for j := range dp[i] {
			dp[i][j] = make([]bool, len+1)
		}
	}

	for k := 1; k <= len; k++ {
		for i := 0; i+k <= len; i++ {
			for j := 0; j+k <= len; j++ {
				if k == 1 {
					dp[i][j][k] = s1[i] == s2[j]
				} else {
					for q := 1; q < k && !dp[i][j][k]; q++ {
						dp[i][j][k] = (dp[i][j][q] && dp[i+q][j+q][k-q]) || (dp[i][j+k-q][q] && dp[i+q][j][k-q])
					}
				}
			}
		}
	}

	return dp[0][0][len]
}
