package main

import (
	"fmt"
	"testing"
)

func longestPalindromeSubseq(s string) int {
	n := len(s)
	dp := make([][]int, n)
	for i := 0; i < n; i++ {
		dp[i] = make([]int, n)
		dp[i][i] = 1
	}

	res := 1
	for l := 1; l <= n; l++ {
		for i := 0; i <= n-l; i++ {
			switch l {
			case 1:

			case 2:
				dp[i][i+1] = 1
				if s[i] == s[i+1] {
					dp[i][i+1]++
				}

			default:
				dp[i][i+l-1] = max(dp[i][i+l-2], dp[i+1][i+l-1])
				if s[i] == s[i+l-1] {
					dp[i][i+l-1] = max(dp[i][i+l-1], dp[i+1][i+l-2]+2)
				}
			}
			if dp[i][i+l-1] > res {
				res = dp[i][i+l-1]
			}
		}
	}
	return res
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func Test516(t *testing.T) {
	fmt.Println(longestPalindromeSubseq("bbbab"))
	fmt.Println(longestPalindromeSubseq("cbbd"))
	fmt.Println(longestPalindromeSubseq("abcabcabcabc"))
	t.Error()
}
