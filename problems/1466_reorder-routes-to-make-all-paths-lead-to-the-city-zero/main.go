package main

import (
	"fmt"
	"testing"
)

func minReorder(n int, connections [][]int) int {
	mapStartToEnd := make(map[int][]int)
	mapEndToStart := make(map[int][]int)
	for _, connection := range connections {
		mapStartToEnd[connection[0]] = append(mapStartToEnd[connection[0]], connection[1])
		mapEndToStart[connection[1]] = append(mapEndToStart[connection[1]], connection[0])
	}

	var res int
	queue := []int{0}
	visited := map[int]bool{0: true}
	for len(queue) > 0 {
		num := queue[0]
		queue = queue[1:]

		for _, start := range mapEndToStart[num] {
			if visited[start] {
				continue
			}

			visited[start] = true
			queue = append(queue, start)
		}
		for _, end := range mapStartToEnd[num] {
			if visited[end] {
				continue
			}

			visited[end] = true
			queue = append(queue, end)
			res++
		}
	}
	return res
}

func Test1466(t *testing.T) {
	fmt.Println(minReorder(6, [][]int{
		{0, 1}, {1, 3}, {2, 3}, {4, 0}, {4, 5},
	}))
	fmt.Println(minReorder(5, [][]int{
		{1, 0}, {1, 2}, {3, 2}, {3, 4},
	}))
	fmt.Println(minReorder(3, [][]int{
		{1, 0}, {2, 0},
	}))
	t.Error()
}

/*
Input: n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
Output: 3
Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).
Example 2:


Input: n = 5, connections = [[1,0],[1,2],[3,2],[3,4]]
Output: 2
Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).
Example 3:

Input: n = 3, connections = [[1,0],[2,0]]
Output: 0
*/
