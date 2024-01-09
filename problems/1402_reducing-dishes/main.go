package main

import (
	"fmt"
	"sort"
	"testing"
)

func maxSatisfaction(satisfaction []int) int {
	sort.Slice(satisfaction, func(i, j int) bool {
		return satisfaction[i] < satisfaction[j]
	})
	sum := satisfaction[len(satisfaction)-1]
	val := satisfaction[len(satisfaction)-1]
	max := satisfaction[len(satisfaction)-1]

	for i := len(satisfaction) - 2; i >= 0; i-- {
		sum += satisfaction[i]
		val += sum

		if val > max {
			max = val
		}
	}

	if max > 0 {
		return max
	}

	return 0
}

func Test1402(t *testing.T) {
	fmt.Println(maxSatisfaction([]int{-1, -8, 0, 5, -9}))
	t.Error()
}
