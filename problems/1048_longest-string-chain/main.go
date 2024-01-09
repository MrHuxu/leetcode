package main

func longestStrChain(words []string) int {
	mapLenToWords := make(map[int][]string)
	var maxLen int
	for _, word := range words {
		maxLen = max(len(word), maxLen)
		mapLenToWords[len(word)] = append(mapLenToWords[len(word)], word)
	}

	var ans int
	mapWordToChanLen := make(map[string]int)
	for i := 1; i <= maxLen; i++ {
		for _, word := range mapLenToWords[i] {
			mapWordToChanLen[word] = 1

			for _, preWord := range mapLenToWords[i-1] {
				if isPredecessor(preWord, word) {
					mapWordToChanLen[word] = max(mapWordToChanLen[word], mapWordToChanLen[preWord]+1)
				}
			}
			ans = max(ans, mapWordToChanLen[word])
		}
	}

	return ans
}

func isPredecessor(str1, str2 string) bool {
	if len(str1)+1 != len(str2) {
		return false
	}

	var hasDiff bool
	for i := 0; i < len(str1); i++ {
		if !hasDiff {
			if str1[i] != str2[i] {
				if str1[i] == str2[i+1] {
					hasDiff = true
				} else {
					return false
				}
			}
		} else {
			if str1[i] != str2[i+1] {
				return false
			}
		}
	}
	return true
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
