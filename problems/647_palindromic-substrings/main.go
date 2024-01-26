package main

func countSubstrings(s string) int {
	dp := make(map[int]map[int]bool, len(s))
	for i := 0; i < len(s); i++ {
		dp[i] = make(map[int]bool)
		dp[i][i] = true
	}

	ans := len(s)
	for l := 2; l <= len(s); l++ {
		for j := l - 1; j < len(s); j++ {
			if l == 2 {
				dp[j-1][j] = s[j-1] == s[j]

				if dp[j-1][j] {
					ans++
				}
			} else {
				dp[j-l+1][j] = s[j-l+1] == s[j] && dp[j-l+2][j-1]

				if dp[j-l+1][j] {
					ans++
				}
			}
		}
	}

	return ans
}
