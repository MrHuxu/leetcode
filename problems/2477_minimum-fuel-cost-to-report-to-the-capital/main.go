package main

import (
	"fmt"
	"math"
	"testing"
)

func minimumFuelCost(roads [][]int, seats int) int64 {
	edgeMap := make(map[int][]int)
	for _, road := range roads {
		edgeMap[road[0]] = append(edgeMap[road[0]], road[1])
		edgeMap[road[1]] = append(edgeMap[road[1]], road[0])
	}

	var res int64

	visited := map[int]bool{0: true}
	for _, end := range edgeMap[0] {
		_, fuel := dfs(end, edgeMap, seats, visited)
		res += int64(fuel)
	}
	return res
}

func dfs(start int, edgeMap map[int][]int, seats int, visited map[int]bool) (int, int) {
	visited[start] = true
	defer func() {
		visited[start] = false
	}()

	if len(edgeMap[start]) == 0 {
		return 1, 1
	}

	var totalPeople, totalFuel int
	for _, end := range edgeMap[start] {
		if visited[end] {
			continue
		}

		people, fuel := dfs(end, edgeMap, seats, visited)
		totalPeople += people
		totalFuel += fuel
	}

	return totalPeople + 1, totalFuel + int(math.Ceil(float64(totalPeople+1)/float64(seats)))
}

func Test2477(t *testing.T) {
	fmt.Println(minimumFuelCost([][]int{
		{0, 1}, {0, 2}, {0, 3},
	}, 5))
	fmt.Println(minimumFuelCost([][]int{
		{3, 1}, {3, 2}, {1, 0}, {0, 4}, {0, 5}, {4, 6},
	}, 2))
	t.Error()
}
