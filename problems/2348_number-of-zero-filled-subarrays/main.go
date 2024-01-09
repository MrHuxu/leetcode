package main

import (
	"fmt"
	"testing"
)

func zeroFilledSubarray(nums []int) int64 {
	var res int64
	startIdx := -1
	for i, num := range nums {
		if num == 0 {
			if startIdx == -1 {
				startIdx = i
			}
			continue
		}

		if startIdx == -1 {
			continue
		}

		cnt := i - startIdx
		res += int64((1 + cnt) * cnt / 2)
		startIdx = -1
	}
	if startIdx != -1 {
		cnt := len(nums) - startIdx
		res += int64((1 + cnt) * cnt / 2)
	}
	return res
}

func Test2348(t *testing.T) {
	fmt.Println(zeroFilledSubarray([]int{1, 3, 0, 0, 2, 0, 0, 4}))
	fmt.Println(zeroFilledSubarray([]int{0, 0, 0, 2, 0, 0}))
	fmt.Println(zeroFilledSubarray([]int{2, 10, 2019}))
	t.Error()
}
