// +build 413

package main

import (
	"fmt"
)

func numberOfArithmeticSlices(A []int) int {
	if len(A) < 3 {
		return 0
	}

	dp := []int{0, 0}
	result := 0
	if A[2]-A[1] == A[1]-A[0] {
		dp = append(dp, 1)
		result++
	} else {
		dp = append(dp, 0)
	}

	for i := 3; i < len(A); i++ {
		if A[i]-A[i-1] == A[i-1]-A[i-2] {
			dp = append(dp, dp[i-1]+1)
		} else {
			dp = append(dp, 0)
		}
		result += dp[i]
	}

	return result
}

func main() {
	fmt.Println(numberOfArithmeticSlices([]int{1, 2, 3, 4}))
	fmt.Println(numberOfArithmeticSlices([]int{2, 1, 3, 4, 2, 3}))
}
