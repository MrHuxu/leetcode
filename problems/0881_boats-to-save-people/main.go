package main

import (
	"fmt"
	"sort"
	"testing"
)

func numRescueBoats(people []int, limit int) int {
	sort.Ints(people)
	var ret int
	left, right := 0, len(people)-1
	for left < right {
		if people[left]+people[right] > limit {
			ret++
			right--
			continue
		}

		ret++
		left++
		right--
	}
	if left == right {
		ret++
	}
	return ret
}

func Test881(t *testing.T) {
	fmt.Println(numRescueBoats([]int{1, 2}, 3))
	fmt.Println(numRescueBoats([]int{3, 2, 2, 1}, 3))
	fmt.Println(numRescueBoats([]int{3, 5, 3, 4}, 5))
	fmt.Println(numRescueBoats([]int{5, 1, 4, 2}, 6))
	t.Error()
}
