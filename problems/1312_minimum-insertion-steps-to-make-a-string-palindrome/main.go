// +build 1704

package main

func minInsertions(s string) int {
	dp := make([][]int, len(s))
	for i := range dp {
		dp[i] = make([]int, len(s))
	}

	for l := 1; l <= len(s); l++ {
		for left := 0; left <= len(s)-l; left++ {
			right := left + l - 1

			switch l {
			case 1:
				dp[left][right] = 0

			case 2:
				if s[left] == s[right] {
					dp[left][right] = 0
				} else {
					dp[left][right] = 1
				}

			case 3:
				if s[left] == s[right] {
					dp[left][right] = 0
				} else {
					if s[left] == s[left+1] || s[right] == s[right-1] {
						dp[left][right] = 1
					} else {
						dp[left][right] = 2
					}
				}

			default:
				var tmp int
				if s[left] == s[right] {
					tmp = dp[left+1][right-1]
				} else {
					tmp = dp[left+1][right-1] + 2
				}
				dp[left][right] = min(tmp, dp[left+1][right]+1, dp[left][right-1]+1)
			}
		}
	}

	return dp[0][len(s)-1]
}

func min(a, b, c int) int {
	m := a

	if b < m {
		m = b
	}
	if c < m {
		m = c
	}

	return m
}

func main() {
	println(minInsertions("zzazz"))
	println(minInsertions("leetcode"))
}
