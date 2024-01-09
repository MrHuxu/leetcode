package main

import (
	"fmt"
	"testing"
)

func minimumTime(time []int, totalTrips int) int64 {
	if totalTrips == 0 {
		return 0
	}

	left := int64(time[0])
	for _, t := range time {
		if int64(t) < left {
			left = int64(t)
		}
	}
	right := left * int64(totalTrips)

	for left < right {
		mid := (left + right) / 2

		var cnt int64
		for _, t := range time {
			cnt += mid / int64(t)
		}

		if cnt >= int64(totalTrips) {
			right = mid
		} else {
			left = mid + 1
		}
	}

	return right
}

func Test2187(t *testing.T) {
	fmt.Println(minimumTime([]int{1, 2, 3}, 5))
	fmt.Println(minimumTime([]int{2}, 1))
	t.Error()
}
