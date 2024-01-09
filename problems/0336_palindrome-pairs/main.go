package main

func palindromePairs(words []string) [][]int {
	mapWordToIdx := make(map[string]int)
	for i, word := range words {
		mapWordToIdx[word] = i
	}

	var ans [][]int
	for i, word := range words {
		if reverse(word) == word && word != "" {
			if idx, ok := mapWordToIdx[""]; ok {
				ans = append(ans, []int{i, idx}, []int{idx, i})
			}
		}

		if idx, ok := mapWordToIdx[reverse(word)]; ok && idx != i {
			ans = append(ans, []int{i, idx})
		}

		for l := 1; l < len(word); l++ {
			if isPalindrome(word[:l]) {
				if idx, ok := mapWordToIdx[reverse(word[l:])]; ok {
					ans = append(ans, []int{idx, i})
				}
			}

			if isPalindrome(word[l:]) {
				if idx, ok := mapWordToIdx[reverse(word[:l])]; ok {
					ans = append(ans, []int{i, idx})
				}
			}
		}
	}

	return ans
}

func reverse(s string) string {
	bs := make([]byte, len(s))
	for i := len(s) - 1; i >= 0; i-- {
		bs[len(s)-1-i] = s[i]
	}
	return string(bs)
}

func isPalindrome(s string) bool {
	for i, j := 0, len(s)-1; i < j; i, j = i+1, j-1 {
		if s[i] != s[j] {
			return false
		}
	}
	return true
}
