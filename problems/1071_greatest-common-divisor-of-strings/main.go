package main

import (
	"fmt"
	"testing"
)

func gcdOfStrings(str1 string, str2 string) string {
	var longer, shorter string
	if len(str1) > len(str2) {
		longer = str1
		shorter = str2
	} else {
		longer = str2
		shorter = str1
	}

	for i := len(shorter); i >= 1; i-- {
		if len(shorter)%i != 0 || len(longer)%i != 0 {
			continue
		}

		sub := shorter[:i]
		if check(str1, sub) && check(str2, sub) {
			return sub
		}
	}

	return ""
}

func check(str1, str2 string) bool {
	for i := 0; i < len(str1)/len(str2); i++ {
		if str1[len(str2)*i:len(str2)*(i+1)] != str2 {
			return false
		}
	}
	return true
}

func Test1071(t *testing.T) {
	fmt.Println(gcdOfStrings("ABCABC", "ABC"))
	fmt.Println(gcdOfStrings("ABABAB", "AB"))
	fmt.Println(gcdOfStrings("LEET", "CODE"))
	t.Error()
}
