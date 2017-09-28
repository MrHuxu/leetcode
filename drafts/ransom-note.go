// +build 383

package main

import "fmt"

func canConstruct(ransomNote string, magazine string) bool {
	rPair := make(map[string]int)
	mPair := make(map[string]int)
	for _, v := range ransomNote {
		rPair[string(v)]++
	}
	for _, v := range magazine {
		mPair[string(v)]++
	}

	flag := true
	for k := range rPair {
		if rPair[k] > mPair[k] {
			flag = false
			break
		}
	}

	return flag
}

func main() {
	fmt.Println(canConstruct("a", "b"))
	fmt.Println(canConstruct("aa", "ab"))
	fmt.Println(canConstruct("aa", "aab"))
}
