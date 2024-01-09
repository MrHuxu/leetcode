package main

import "sort"

func minimumLengthEncoding(words []string) int {
	sort.Slice(words, func(i, j int) bool {
		return len(words[i]) > len(words[j])
	})

	var ret int
	exist := make(map[string]bool)
	for _, word := range words {
		if exist[word] {
			continue
		}

		ret += len(word) + 1
		for i := 0; i < len(word); i++ {
			exist[word[i:]] = true
		}
	}
	return ret
}

func main() {
	println(minimumLengthEncoding([]string{"time", "me"}))
	println(minimumLengthEncoding([]string{"time", "me", "bell"}))
	println(minimumLengthEncoding([]string{"t"}))
}
