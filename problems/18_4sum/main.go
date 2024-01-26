package main

import "sort"

func fourSum(nums []int, target int) [][]int {
	sort.Slice(nums, func(i, j int) bool {
		return nums[i] < nums[j]
	})

	var result [][]int
	for i := 0; i <= len(nums)-4; i++ {
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}

		for j := i + 1; j <= len(nums)-3; j++ {
			if j > i+1 && nums[j] == nums[j-1] {
				continue
			}

			sum := nums[i] + nums[j]

			left := j + 1
			right := len(nums) - 1
			for left < right {
				switch {
				case sum+nums[left]+nums[right] < target:
					left++

				case sum+nums[left]+nums[right] > target:
					right--

				default:
					result = append(result, []int{nums[i], nums[j], nums[left], nums[right]})

					for left < len(nums)-1 && nums[left] == nums[left+1] {
						left++
					}
					left++
					for right > 0 && nums[right] == nums[right-1] {
						right--
					}
					right--
				}
			}
		}
	}

	return result
}
