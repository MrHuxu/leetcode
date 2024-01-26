package main

import (
	"fmt"
	"sort"
	"testing"
)

func findAllConcatenatedWordsInADict(words []string) []string {
	sort.Slice(words, func(i, j int) bool { return len(words[i]) < len(words[j]) })
	minLen := len(words[0])
	wordsMap := make(map[string]bool)
	var res []string
	for _, word := range words {
		if len(word) < minLen*2 {
			wordsMap[word] = true
			continue
		}

		if dfs(word, minLen, wordsMap) {
			res = append(res, word)
		}
		wordsMap[word] = true
	}

	return res
}

func dfs(word string, minLen int, wordsMap map[string]bool) bool {
	if word == "" {
		return true
	}

	for i := len(word); i >= minLen; i-- {
		sub := word[:i]
		if wordsMap[sub] {
			if dfs(word[i:], minLen, wordsMap) {
				return true
			}
		}
	}

	return false
}

func Test472(t *testing.T) {
	fmt.Println(findAllConcatenatedWordsInADict([]string{"cat", "cats", "catsdogcats", "dog", "dogcatsdog", "hippopotamuses", "rat", "ratcatdogcat"}))
	fmt.Println(findAllConcatenatedWordsInADict([]string{"cat", "dog", "catdog"}))
	t.Error()
}
