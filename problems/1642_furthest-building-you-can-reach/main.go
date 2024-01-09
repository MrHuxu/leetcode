// +build 213_2

package main

func furthestBuilding(heights []int, bricks int, ladders int) int {

}

func main() {
	println(furthestBuilding([]int{4, 2, 7, 6, 9, 14, 12}, 5, 1))
	println(furthestBuilding([]int{4, 12, 2, 7, 3, 18, 20, 3, 19}, 10, 2))
	println(furthestBuilding([]int{14, 3, 19, 3}, 17, 0))
}

/*
Input: heights = [4,2,7,6,9,14,12], bricks = 5, ladders = 1
Output: 4
Input: heights = [4,12,2,7,3,18,20,3,19], bricks = 10, ladders = 2
Output: 7
Input: heights = [14,3,19,3], bricks = 17, ladders = 0
Output: 3
*/
