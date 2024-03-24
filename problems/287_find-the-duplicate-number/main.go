func findDuplicate(nums []int) int {
	slow, fast := nums[0], nums[0]
	slow, fast = nums[slow], nums[nums[fast]]
	for slow != fast {
		slow, fast = nums[slow], nums[nums[fast]]
	}
	slow = nums[0]
	for slow != fast {
		slow, fast = nums[slow], nums[fast]
	}
	return slow
}