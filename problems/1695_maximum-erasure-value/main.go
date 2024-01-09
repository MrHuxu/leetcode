package main

func maximumUniqueSubarray(nums []int) int {
	var ans int

	var sum int
	cnt := make(map[int]int)
	for left, right := 0, 0; right < len(nums); right++ {
		if cnt[nums[right]] > 0 {
			for left < right {
				cnt[nums[left]]--
				sum -= nums[left]
				left++

				if nums[left-1] == nums[right] {
					break
				}
			}
		}

		cnt[nums[right]]++
		sum += nums[right]

		ans = max(ans, sum)
	}

	return ans
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
