// +build 211_1

package main

import (
	"fmt"
	"sort"
)

func bestTeamScore(scores []int, ages []int) int {
	sort.Slice(scores, func(i, j int) bool {
		return ages[i] < ages[j]
	})
	fmt.Println(scores)

	var result int
	max := scores[0]
	for i := 0; i < len(scores); i++ {
		if scores[i] < max {
			continue
		} else {
			max = scores[i]
		}

		result += scores[i]
	}
	return result
}

func main() {
	println(bestTeamScore([]int{1, 3, 5, 10, 15}, []int{1, 2, 3, 4, 5}))
	println(bestTeamScore([]int{4, 5, 6, 5}, []int{2, 1, 2, 1}))
	println(bestTeamScore([]int{1, 2, 3, 5}, []int{8, 9, 10, 1}))
}
