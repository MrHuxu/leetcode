package main

func maxProduct(words []string) int {
	letterExist := make([]int64, len(words))
	for i, word := range words {
		for j := range word {
			letterExist[i] = letterExist[i] | (1 << int(word[j]-'a'))
		}
	}

	var ans int
	for i := 0; i < len(words)-1; i++ {
		for j := i + 1; j < len(words); j++ {
			if letterExist[i]&letterExist[j] == 0 {
				ans = max(ans, len(words[i])*len(words[j]))
			}
		}
	}
	return ans
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
