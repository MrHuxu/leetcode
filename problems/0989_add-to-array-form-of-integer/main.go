package main

import (
	"fmt"
	"testing"
)

func addToArrayForm(num []int, k int) []int {
	num2 := convNumberToArray(k)
	length := max(len(num), len(num2))
	res := make([]int, length)
	var carry int
	for i := 0; i < length; i++ {
		if i < len(num) {
			carry += num[len(num)-1-i]
		}
		if i < len(num2) {
			carry += num2[len(num2)-1-i]
		}

		res[len(res)-1-i] = carry % 10
		carry /= 10
	}

	if carry > 0 {
		return append([]int{carry}, res...)
	}

	return res
}

func convNumberToArray(k int) []int {
	if k == 0 {
		return nil
	}

	return append(convNumberToArray(k/10), k%10)
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func Test989(t *testing.T) {
	fmt.Println(addToArrayForm([]int{1, 2, 0, 0}, 34))
	fmt.Println(addToArrayForm([]int{2, 7, 4}, 181))
	fmt.Println(addToArrayForm([]int{2, 1, 5}, 806))
	t.Error()
}
