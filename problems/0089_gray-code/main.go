package main

func grayCode(n int) []int {
	if n == 1 {
		return []int{0, 1}
	}

	ans := []int{0, 1}
	for i := 2; i <= n; i++ {
		l := len(ans)

		for j := 0; j < l; j++ {
			ans = append(ans, ans[l-1-j])
		}

		for j := 0; j < l; j++ {
			ans[j] = ans[j] << 1
			ans[len(ans)-1-j] = ans[len(ans)-1-j]<<1 + 1
		}
	}
	return ans
}
