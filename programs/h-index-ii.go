package main

import "fmt"

func hIndex(citations []int) int {
	result := 0
	l := len(citations)
	for i := range citations {
		if citations[i] >= l-i {
			result = l - i
			break
		}
	}
	return result
}

func main() {
	test := []int{11, 15}
	fmt.Println(hIndex(test))
}
