package main

type element struct {
	val rune
	cnt int
}

func removeDuplicates(s string, k int) string {
	var stack []element
	for _, r := range s {
		if len(stack) > 0 && stack[len(stack)-1].val == r {
			stack[len(stack)-1].cnt++

			if stack[len(stack)-1].cnt == k {
				stack = stack[:len(stack)-1]
			}

			continue
		}

		stack = append(stack, element{
			val: r,
			cnt: 1,
		})
	}

	var ans []rune
	for _, s := range stack {
		for i := 0; i < s.cnt; i++ {
			ans = append(ans, s.val)
		}
	}

	return string(ans)
}
