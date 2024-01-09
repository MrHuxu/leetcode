package main

import (
	"fmt"
	"testing"
)

func subarraysDivByK(nums []int, k int) int {
	sumCnt := make(map[int]int)
	var preSum, res int
	sumCnt[0] = 1
	for _, num := range nums {
		preSum = (preSum + num) % k
		if preSum < 0 {
			preSum += k
		}

		res += sumCnt[preSum]
		sumCnt[preSum]++
	}

	return res
}

func Test974(t *testing.T) {
	fmt.Println(subarraysDivByK([]int{4, 5, 0, -2, -3, 1}, 5))
	fmt.Println(subarraysDivByK([]int{5}, 9))
	fmt.Println(subarraysDivByK([]int{-1, 2, 9}, 2))
	t.Error()
}
