package main

func checkPossibility(nums []int) bool {
	var modified bool
	for i := 0; i < len(nums); i++ {
		if i == 0 || nums[i] >= nums[i-1] {
			continue
		}

		if modified {
			return false
		}

		if i == 1 || nums[i-2] <= nums[i] {
			nums[i-1] = nums[i]
		} else {
			nums[i] = nums[i-1]
		}
		modified = true
	}

	return true
}
