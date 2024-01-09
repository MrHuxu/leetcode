package main

func minOperations(n int) int {
	start := n - 1

	var ans int
	for start >= 0 {
		ans += start
		start -= 2
	}

	return ans
}
