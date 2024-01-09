package main

import (
	"fmt"
	"testing"
)

func partitionString(s string) int {
	ret := 1
	cnt := make([]int, 26)
	for _, r := range s {
		pos := r - rune('a')
		if cnt[pos] == 0 {
			cnt[pos]++
			continue
		}

		ret++
		cnt = make([]int, 26)
		cnt[pos]++
	}
	return ret
}

func Test2405(t *testing.T) {
	fmt.Println(partitionString("abacaba"))
	fmt.Println(partitionString("ssssss"))
	fmt.Println(partitionString("hdklqkcssgxlvehva"))
	t.Error()
}
