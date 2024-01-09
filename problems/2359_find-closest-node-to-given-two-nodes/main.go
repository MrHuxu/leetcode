package main

import (
	"fmt"
	"math"
	"testing"
)

func closestMeetingNode(edges []int, node1 int, node2 int) int {
	edgeMap := make(map[int][]int)
	for i, edge := range edges {
		if edge == -1 {
			continue
		}

		edgeMap[i] = append(edgeMap[i], edge)
	}

	distances1 := bfs(node1, edgeMap)
	distances2 := bfs(node2, edgeMap)

	resDistance := math.MaxInt
	res := -1
	for i := 0; i < len(edges); i++ {
		distance1, exist1 := distances1[i]
		distance2, exist2 := distances2[i]

		if !(exist1 && exist2) {
			continue
		}

		if tmp := max(distance1, distance2); tmp < resDistance {
			resDistance = tmp
			res = i
		}
	}

	return res
}

func bfs(start int, edgeMap map[int][]int) map[int]int {
	distances := map[int]int{start: 0}
	queue := []int{start}
	for len(queue) > 0 {
		node := queue[0]
		queue = queue[1:]

		for _, target := range edgeMap[node] {
			if _, ok := distances[target]; ok {
				continue
			}
			distances[target] = distances[node] + 1
			queue = append(queue, target)
		}
	}
	return distances
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func Test2359(t *testing.T) {
	fmt.Println(closestMeetingNode([]int{2, 2, 3, -1}, 0, 1))
	fmt.Println(closestMeetingNode([]int{1, 2, -1}, 0, 2))
	t.Error()
}
