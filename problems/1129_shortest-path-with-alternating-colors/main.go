package main

import (
	"fmt"
	"testing"
)

func shortestAlternatingPaths(n int, redEdges [][]int, blueEdges [][]int) []int {
	redMap, blueMap := make(map[int][]int), make(map[int][]int)
	for _, edge := range redEdges {
		redMap[edge[0]] = append(redMap[edge[0]], edge[1])
	}
	for _, edge := range blueEdges {
		blueMap[edge[0]] = append(blueMap[edge[0]], edge[1])
	}

	res := make([]int, n)
	for i := 1; i < n; i++ {
		res[i] = -1
	}

	visited := []map[int]bool{{}, {}}
	queue := [][]int{{0, 0, -1}}
	for len(queue) > 0 {
		item := queue[0]
		start, length, color := item[0], item[1], item[2]
		queue = queue[1:]

		if color != 0 {
			for _, end := range redMap[start] {
				if visited[0][end] {
					continue
				}
				visited[0][end] = true
				if res[end] == -1 || res[end] > length+1 {
					res[end] = length + 1
				}
				queue = append(queue, []int{end, length + 1, 0})
			}
		}
		if color != 1 {
			for _, end := range blueMap[start] {
				if visited[1][end] {
					continue
				}
				visited[1][end] = true
				if res[end] == -1 || res[end] > length+1 {
					res[end] = length + 1
				}
				queue = append(queue, []int{end, length + 1, 1})
			}
		}
	}

	return res
}

func Test1129(t *testing.T) {
	fmt.Println(shortestAlternatingPaths(3, [][]int{{0, 1}, {1, 2}}, nil))
	fmt.Println(shortestAlternatingPaths(3, [][]int{{0, 1}}, [][]int{{2, 1}}))
	fmt.Println(shortestAlternatingPaths(3, [][]int{{0, 1}}, [][]int{{1, 2}}))
	t.Error()
}
