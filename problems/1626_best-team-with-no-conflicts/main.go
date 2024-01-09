package main

import (
	"fmt"
	"sort"
	"testing"
)

func bestTeamScore(scores []int, ages []int) int {
	data := make([][]int, 0, len(scores))
	for i := range scores {
		data = append(data, []int{scores[i], ages[i]})
	}
	sort.Slice(data, func(i, j int) bool {
		if data[i][1] != data[j][1] {
			return data[i][1] < data[j][1]
		}

		return data[i][0] < data[j][0]
	})

	var res int
	scoreSums := make([]int, len(scores))
	for i, d := range data {
		scoreSums[i] = d[0]

		if i == 0 {
			res = scoreSums[i]
			continue
		}

		for j := i - 1; j >= 0; j-- {
			if data[j][0] <= d[0] && scoreSums[j]+d[0] > scoreSums[i] {
				scoreSums[i] = scoreSums[j] + d[0]
			}
		}
		if scoreSums[i] > res {
			res = scoreSums[i]
		}
	}

	return res
}

func Test1626(t *testing.T) {
	fmt.Println(bestTeamScore([]int{1, 3, 5, 10, 15}, []int{1, 2, 3, 4, 5}))
	fmt.Println(bestTeamScore([]int{4, 5, 6, 5}, []int{2, 1, 2, 1}))
	fmt.Println(bestTeamScore([]int{1, 2, 3, 5}, []int{8, 9, 10, 1}))
	t.Error()
}
