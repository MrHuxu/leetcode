package main

func countBinarySubstrings(s string) int {
	var pre, curr byte
	var preCnt, currCnt, ans int

	pre = s[0]
	preCnt = 1

	for i := 1; i < len(s); i++ {
		if s[i] == pre {
			if currCnt == 0 {
				preCnt++
			} else {
				ans += min(preCnt, currCnt)

				pre = curr
				preCnt = currCnt

				curr = s[i]
				currCnt = 1
			}
		} else {
			curr = s[i]
			currCnt++
		}
	}
	ans += min(preCnt, currCnt)

	return ans
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func countBinarySubstringsTraverse(s string) int {
	var ans int
	for i := 0; i < len(s)-1; i++ {
		if s[i] != s[i+1] {
			ans++

			for l := 1; i-l >= 0 && i+l+1 < len(s); l++ {
				if s[i-l] != s[i+l+1] && s[i-l] == s[i] && s[i+l+1] == s[i+1] {
					println(i, l)
					ans++
				} else {
					break
				}
			}
		}
	}
	return ans
}

func countBinarySubstringsDP(s string) int {
	dp := make([][]bool, len(s))
	for i := range dp {
		dp[i] = make([]bool, len(s)+1)
	}

	var ans int
	for l := 0; l <= len(s); l += 2 {
		for i := 0; i < len(s) && i+l-1 < len(s); i++ {
			if l == 0 {
				dp[i][l] = true
				continue
			}

			if l == 2 {
				dp[i][l] = s[i] != s[i+l-1]
			} else {
				dp[i][l] = dp[i+1][l-2] && (s[i] != s[i+l-1] && s[i] == s[i+1] && s[i+l-1] == s[i+l-2])
			}

			if dp[i][l] {
				println(i, l)
				ans++
			}
		}
	}

	return ans
}
