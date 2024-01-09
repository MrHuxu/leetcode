package main

import (
	"fmt"
	"testing"
)

func countSubarrays(nums []int, minK int, maxK int) int64 {
	var res int64
	startIdx, minKIdx, maxKIdx := -1, -1, -1
	for i, num := range nums {
		if num < minK || num > maxK {
			startIdx, minKIdx, maxKIdx = -1, -1, -1
			continue
		}

		if startIdx == -1 {
			startIdx = i
		}

		if minK == maxK {
			if num == minK {
				minKIdx = i
				res += int64(minKIdx - startIdx + 1)
			}
			continue
		}

		if num == minK {
			minKIdx = i
		}
		if num == maxK {
			maxKIdx = i
		}

		if minKIdx != -1 && maxKIdx != -1 {
			res += int64(min(minKIdx, maxKIdx) - startIdx + 1)
		}
	}
	return res
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func Test2444(t *testing.T) {
	fmt.Println(countSubarrays([]int{1, 3, 5, 2, 7, 5}, 1, 5))
	fmt.Println(countSubarrays([]int{1, 1, 1, 1}, 1, 1))
	fmt.Println(countSubarrays([]int{
		35054, 398719, 945315, 945315, 820417, 945315, 35054, 945315, 171832, 945315, 35054, 109750, 790964, 441974, 552913,
	}, 35054, 945315))
	fmt.Println(countSubarrays([]int{4, 3}, 3, 3))
	t.Error()
}
