package main

func findLUSlength(strs []string) int {
	data := make([]map[string]bool, len(strs))
	for i, str := range strs {
		data[i] = make(map[string]bool)
		generateSubSequences("", str, 0, data[i])
	}

	ans := -1
	for i := range data {
		for sequence := range data[i] {
			if len(sequence) <= ans {
				continue
			}

			var exist bool
			for j := range data {
				if j == i {
					continue
				}

				if data[j][sequence] {
					exist = true
					break
				}
			}
			if !exist {
				ans = max(ans, len(sequence))
			}
		}
	}
	return ans
}

func generateSubSequences(pre, str string, idx int, exist map[string]bool) {
	if idx == len(str) {
		return
	}

	for i := idx; i < len(str); i++ {
		curr := string(append([]byte(pre), str[i]))
		exist[curr] = true
		generateSubSequences(curr, str, i+1, exist)
	}
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
