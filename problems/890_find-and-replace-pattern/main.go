package main

func findAndReplacePattern(words []string, pattern string) []string {
	var ans []string
	for _, word := range words {
		match := true
		mapWordToPattern := make(map[byte]byte)
		mapPatternToWord := make(map[byte]byte)

		for i := 0; i < len(word); i++ {
			if mapWordToPattern[word[i]] == 0 && mapPatternToWord[pattern[i]] == 0 {
				mapWordToPattern[word[i]] = pattern[i]
				mapPatternToWord[pattern[i]] = word[i]
			} else if mapWordToPattern[word[i]] != pattern[i] || mapPatternToWord[pattern[i]] != word[i] {
				match = false
				break
			}
		}
		if match {
			ans = append(ans, word)
		}
	}
	return ans
}
