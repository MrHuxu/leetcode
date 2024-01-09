package main

import (
	"fmt"
	"testing"
)

func longestCycle(edges []int) int {
	res := -1
	visited := make(map[int]bool)
	for i := range edges {
		if visited[i] {
			continue
		}
		visited[i] = true

		if length := dfs(i, 0, edges, map[int]int{i: 0}, visited); length > res {
			res = length
		}
	}
	return res
}

func dfs(start int, depth int, edges []int, currVisited map[int]int, visited map[int]bool) int {
	target := edges[start]
	if target == -1 {
		return -1
	}
	if d, ok := currVisited[target]; ok {
		return depth - d + 1
	}
	if visited[target] {
		return -1
	}
	visited[target] = true
	currVisited[target] = depth + 1
	return dfs(target, depth+1, edges, currVisited, visited)
}

func Test2360(t *testing.T) {
	fmt.Println(longestCycle([]int{3, 3, 4, 2, 3}))
	fmt.Println(longestCycle([]int{2, -1, 3, 1}))
	t.Error()
}
