package main

func constructArray(n int, k int) []int {
	ans := []int{1}
	positive := true
	for i := k; i >= 1; i-- {
		if positive {
			ans = append(ans, ans[len(ans)-1]+i)
		} else {
			ans = append(ans, ans[len(ans)-1]-i)
		}
		positive = !positive
	}
	for j := k + 2; j <= n; j++ {
		ans = append(ans, j)
	}
	return ans
}
