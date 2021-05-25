// +build 215_2

package main

func minOperations(nums []int, x int) int {
	can, op := helper(nums, 0, len(nums)-1, x)
	if can {
		return op
	}
	return -1
}

func helper(nums []int, front, tail, value int) (bool, int) {
	if front > tail {
		return false, -1
	}

	switch {
	case nums[front] > value && nums[tail] > value:
		return false, -1

	case nums[front] == value, nums[tail] == value:
		return true, 1

	default:
		can1, op1 := helper(nums, front+1, tail, value-nums[front])
		can2, op2 := helper(nums, front, tail-1, value-nums[tail])

		switch {
		case can1 && can2:
			return true, 1 + min(op1, op2)
		case can1:
			return true, 1 + op1
		case can2:
			return true, 1 + op2
		default:
			return false, -1
		}
	}
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func main() {
	println(minOperations([]int{1, 1, 4, 2, 3}, 5))
	println(minOperations([]int{5, 6, 7, 8, 9}, 4))
	println(minOperations([]int{3, 2, 20, 1, 1, 3}, 10))
	println(minOperations([]int{8828, 9581, 49, 9818, 9974, 9869, 9991, 10000, 10000, 10000, 9999, 9993, 9904, 8819, 1231, 6309},
		134365))
}

/*

Input: nums = [1,1,4,2,3], x = 5
Output: 2
Explanation: The optimal solution is to remove the last two elements to reduce x to zero.
Example 2:

Input: nums = [5,6,7,8,9], x = 4
Output: -1
Example 3:

Input: nums = [3,2,20,1,1,3], x = 10

*/
