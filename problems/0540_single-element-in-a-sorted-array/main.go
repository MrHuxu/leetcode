package main

func singleNonDuplicate(nums []int) int {
    if len(nums) == 1 || nums[0] != nums[1] {
        return nums[0]
    }
    if nums[len(nums) - 1] != nums[len(nums) - 2] {
        return nums[len(nums) - 1]
    }
    
    for i := 1; i < len(nums) - 1; i++ {
        if nums[i] != nums[i - 1] && nums[i] != nums[i + 1] {
            return nums[i]
        }
    }
    return 0    
}