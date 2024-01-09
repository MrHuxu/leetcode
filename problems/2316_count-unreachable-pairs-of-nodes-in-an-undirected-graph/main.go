package main

import (
	"fmt"
	"testing"
)

func countPairs(n int, edges [][]int) int64 {
	edgeMap := make(map[int][]int)
	for _, edge := range edges {
		edgeMap[edge[0]] = append(edgeMap[edge[0]], edge[1])
		edgeMap[edge[1]] = append(edgeMap[edge[1]], edge[0])
	}

	var ret int64
	visited := make(map[int]bool)
	for i := 0; i < n; i++ {
		if visited[i] {
			continue
		}
		visited[i] = true

		cnt := int64(1)
		queue := []int{i}
		for len(queue) > 0 {
			start := queue[0]
			queue = queue[1:]

			for _, end := range edgeMap[start] {
				if visited[end] {
					continue
				}

				visited[end] = true
				queue = append(queue, end)
				cnt++
			}
		}
		ret += cnt * (int64(n) - cnt)
	}
	return ret / 2
}

func Test2316(t *testing.T) {
	fmt.Println(countPairs(3, [][]int{
		{0, 1}, {0, 2}, {1, 2},
	}))
	fmt.Println(countPairs(7, [][]int{
		{0, 2}, {0, 5}, {2, 4}, {1, 6}, {5, 4},
	}))
	t.Error()
}
