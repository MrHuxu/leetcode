package main

func longestValidParentheses(s string) int {
	var ans int

	var tmp int
	var stack []interface{}
	for _, r := range s {
		if r == '(' {
			ans = max(ans, tmp)

			stack = append(stack, tmp, r)
			tmp = 0
		} else {
			if len(stack) > 0 && stack[len(stack)-1] == '(' {
				tmp += 2
				stack = stack[:len(stack)-1]

				for len(stack) > 0 {
					if val, ok := stack[len(stack)-1].(int); ok {
						tmp += val
						stack = stack[:len(stack)-1]
					} else {
						break
					}
				}

				ans = max(ans, tmp)
			} else {
				stack = append(stack, r)

				ans = max(ans, tmp)
				tmp = 0
			}
		}
	}
	ans = max(ans, tmp)

	return ans
}

func max(a, b int) int {
	if a > b {
		return a
	}

	return b
}
