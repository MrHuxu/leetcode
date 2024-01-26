package main

import "fmt"

func checkSubarraySum(nums []int, k int) bool {
	sums := make(map[int]bool, len(nums))
	sum := nums[0]
	for i := 1; i < len(nums); i++ {
		sum += nums[i]

		for s := range sums {
			if (sum-s)%k == 0 {
				return true
			}
		}
		sums[sum] = true
	}
	return false
}

func main() {
	fmt.Println(checkSubarraySum([]int{23, 2, 4, 6, 7}, 6))
	fmt.Println(checkSubarraySum([]int{23, 2, 6, 4, 7}, 6))
	fmt.Println(checkSubarraySum([]int{23, 2, 6, 4, 7}, 13))
}

/*
Input: nums = [23,2,4,6,7], k = 6
Output: true
Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.
Example 2:

Input: nums = [23,2,6,4,7], k = 6
Output: true
Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.
Example 3:

Input: nums = [23,2,6,4,7], k = 13
Output: false
*/
