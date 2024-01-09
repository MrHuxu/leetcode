package main

import (
	"sort"
)

func triangleNumber(nums []int) int {
	sort.Slice(nums, func(i, j int) bool {
		return nums[i] < nums[j]
	})

	var ans int
	for i := 0; i < len(nums)-2; i++ {
		if nums[i] == 0 {
			continue
		}

		for j := i + 1; j < len(nums)-1; j++ {
			if nums[j] == 0 {
				continue
			}

			for k := j + 1; k < len(nums); k++ {
				if nums[k] == 0 {
					continue
				}

				if nums[i]+nums[j] > nums[k] {
					ans++
				}
			}
		}
	}
	return ans
}
