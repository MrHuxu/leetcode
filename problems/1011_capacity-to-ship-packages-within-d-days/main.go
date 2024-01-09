package main

import (
	"fmt"
	"math"
	"testing"
)

func shipWithinDays(weights []int, days int) int {
	var sum, maxWeight int
	for _, weight := range weights {
		sum += weight
		maxWeight = max(maxWeight, weight)
	}
	res := max(maxWeight, int(math.Ceil(float64(sum)/float64(days))))
	for res <= sum {
		dayCnt := 1
		shipLeft := res
		for _, weight := range weights {
			if weight <= shipLeft {
				shipLeft -= weight
				continue
			}

			dayCnt++
			shipLeft = res - weight
		}

		if dayCnt <= days {
			return res
		}
		res++
	}
	return 0
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func Test1011(t *testing.T) {
	fmt.Println(shipWithinDays([]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, 5))
	fmt.Println(shipWithinDays([]int{3, 2, 2, 4, 1, 4}, 3))
	fmt.Println(shipWithinDays([]int{1, 2, 3, 1, 1}, 4))
	t.Error()
}
