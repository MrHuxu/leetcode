package main

import (
	"fmt"
	"testing"
)

func sortArray(nums []int) []int {
	if len(nums) <= 1 {
		return nums
	}

	mid := len(nums) / 2
	left := nums[:mid]
	right := nums[mid:]

	left = sortArray(left)
	right = sortArray(right)

	return merge(left, right)
}

func merge(left, right []int) []int {
	size, i, j := len(left)+len(right), 0, 0
	result := make([]int, size)

	for k := 0; k < size; k++ {
		if i > len(left)-1 && j <= len(right)-1 {
			result[k] = right[j]
			j++
		} else if j > len(right)-1 && i <= len(left)-1 {
			result[k] = left[i]
			i++
		} else if left[i] < right[j] {
			result[k] = left[i]
			i++
		} else {
			result[k] = right[j]
			j++
		}
	}

	return result
}

func Test912(t *testing.T) {
	fmt.Println(sortArray([]int{5, 3, 8, 1, 2, 7, 6, 4}))
	t.Error()
}
