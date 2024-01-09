// +build 186_0

package main

func maxScore(s string) int {
	var cnt1 int
	for _, r := range s {
		if r == '1' {
			cnt1++
		}
	}

	var result, left0 int
	if s[0] == '0' {
		result = 1 + cnt1
		left0++
	} else {
		result = cnt1 - 1
		cnt1--
	}

	for i := 1; i < len(s)-1; i++ {
		if s[i] == '0' {
			left0++
		} else {
			cnt1--
		}

		result = max(result, left0+cnt1)
	}

	return result
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	println(maxScore("011101"))
	println(maxScore("00111"))
	println(maxScore("1111"))
	println(maxScore("1011011"))
}
