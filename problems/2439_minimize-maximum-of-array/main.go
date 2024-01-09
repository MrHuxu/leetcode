package main

import (
	"fmt"
	"math"
	"testing"
)

func minimizeArrayValue(nums []int) int {
	var sum, ret int
	for i := 0; i < len(nums); i++ {
		sum += nums[i]
		if avg := int(math.Ceil(float64(sum) / (float64(i) + 1))); avg > ret {
			ret = avg
		}

	}
	return ret
}

func Test2439(t *testing.T) {
	fmt.Println(minimizeArrayValue([]int{3, 7, 1, 6}))
	fmt.Println(minimizeArrayValue([]int{10, 1}))
	fmt.Println(minimizeArrayValue([]int{13, 13, 20, 0, 8, 9, 9}))
	t.Error()
}
