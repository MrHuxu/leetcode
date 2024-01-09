package main

import (
	"fmt"
	"testing"
)

func minScore(n int, roads [][]int) int {
	roadMaps := make(map[int]map[int]int)
	for _, road := range roads {
		if _, ok := roadMaps[road[0]]; !ok {
			roadMaps[road[0]] = make(map[int]int)
		}
		if _, ok := roadMaps[road[1]]; !ok {
			roadMaps[road[1]] = make(map[int]int)
		}

		roadMaps[road[0]][road[1]] = road[2]
		roadMaps[road[1]][road[0]] = road[2]
	}

	res := -1
	queue := []int{1}
	visited := map[int]bool{1: true}
	for len(queue) > 0 {
		start := queue[0]
		queue = queue[1:]

		for target, distance := range roadMaps[start] {
			if res == -1 || distance < res {
				res = distance
			}
			if !visited[target] {
				visited[target] = true
				queue = append(queue, target)
			}
		}
	}

	return res
}

func Test2492(t *testing.T) {
	fmt.Println(minScore(4, [][]int{
		{1, 2, 9}, {2, 3, 6}, {2, 4, 5}, {1, 4, 7},
	}))
	fmt.Println(minScore(4, [][]int{
		{1, 2, 2}, {1, 3, 4}, {3, 4, 7},
	}))
	t.Error()
}

/*
Input: n = 4, roads = [[1,2,9],[2,3,6],[2,4,5],[1,4,7]]
Output: 5
Explanation: The path from city 1 to 4 with the minimum score is: 1 -> 2 -> 4. The score of this path is min(9,5) = 5.
It can be shown that no other path has less score.
Example 2:


Input: n = 4, roads = [[1,2,2],[1,3,4],[3,4,7]]
Output: 2
*/
