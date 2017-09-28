package main

import "fmt"

func firstUniqChar(s string) int {
	var times = make(map[string]int)
	result := -1

	for _, v := range s {
		times[string(v)]++
	}

	for i, v := range s {
		if times[string(v)] == 1 {
			result = i
			break
		}
	}

	return result
}

func main() {
	fmt.Println(firstUniqChar("leetcode"))
	fmt.Println(firstUniqChar("loveleetcode"))
}
