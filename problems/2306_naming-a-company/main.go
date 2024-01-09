package main

import (
	"fmt"
	"testing"
)

func distinctNames(ideas []string) int64 {
	letterSuffixes := make(map[int][]string)
	for _, idea := range ideas {
		letterSuffixes[int(idea[0]-'a')] = append(letterSuffixes[int(idea[0]-'a')], idea[1:])
	}

	var res int64
	for i := 0; i < 25; i++ {
		for j := i + 1; j < 26; j++ {
			tmp := make(map[string]bool)
			for _, suffix := range letterSuffixes[i] {
				tmp[suffix] = true
			}
			for _, suffix := range letterSuffixes[j] {
				tmp[suffix] = true
			}
			res += int64((len(letterSuffixes[i]) - len(tmp)) * (len(letterSuffixes[j]) - len(tmp)))
		}
	}
	return res * 2
}

func Test2306(t *testing.T) {
	fmt.Println(distinctNames([]string{"coffee", "donuts", "time", "toffee"}))
	fmt.Println(distinctNames([]string{"lack", "back"}))
	fmt.Println(distinctNames([]string{"aaa", "baa", "caa", "bbb", "cbb", "dbb"}))
	t.Error()
}
