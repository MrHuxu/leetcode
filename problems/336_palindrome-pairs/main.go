package main

import "fmt"

func palindromePairs(words []string) [][]int {
	var result [][]int

	mapWordToIndex := make(map[string]int)
	for i, word := range words {
		mapWordToIndex[word] = i
	}

	for i, word := range words {
		r := reverse(word)

		if r == word {
			if idx, ok := mapWordToIndex[""]; ok && idx != i {
				result = append(result, []int{i, idx}, []int{idx, i})
			}
		}

		if idx, ok := mapWordToIndex[r]; ok && idx != i {
			result = append(result, []int{i, idx})
		}

		for j := 1; j < len(r); j++ {
			if idx, ok := mapWordToIndex[r[j:len(r)]]; ok && isPalindrome(r[0:j]) {
				result = append(result, []int{i, idx})
			}

			if idx, ok := mapWordToIndex[r[0:j]]; ok && isPalindrome(r[j:len(r)]) {
				result = append(result, []int{idx, i})
			}
		}
	}

	return result
}

func reverse(s string) string {
	bytes := make([]byte, len(s))
	for i := len(s) - 1; i >= 0; i-- {
		bytes[len(s)-1-i] = s[i]
	}
	return string(bytes)
}

func isPalindrome(s string) bool {
	i := 0
	j := len(s) - 1
	for i <= j {
		if s[i] != s[j] {
			return false
		}
		i++
		j--
	}
	return true
}

func main() {
	fmt.Println(palindromePairs([]string{
		"abcd", "dcba", "lls", "s", "sssll",
	}))
}
