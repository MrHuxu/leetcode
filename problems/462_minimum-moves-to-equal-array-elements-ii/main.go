package main

import "sort"

func minMoves2(nums []int) int {
	sort.Slice(nums, func(i, j int) bool {
		return nums[i] < nums[j]
	})
	var mid int
	if len(nums)%2 == 0 {
		mid = (nums[len(nums)/2-1] + nums[len(nums)/2]) / 2
	} else {
		mid = nums[len(nums)/2]
	}

	var ans int
	for _, num := range nums {
		ans += abs(num - mid)
	}
	return ans
}

func abs(i int) int {
	if i >= 0 {
		return i
	}
	return -i
}
