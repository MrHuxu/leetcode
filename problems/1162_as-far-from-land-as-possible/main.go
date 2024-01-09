package main

import (
	"fmt"
	"testing"
)

func maxDistance(grid [][]int) int {
	var exist0, exist1 bool
	distances := make([][]int, len(grid))
	visited := make([][]bool, len(grid))
	for i, row := range grid {
		distances[i] = make([]int, len(grid[i]))
		visited[i] = make([]bool, len(grid[i]))

		for _, val := range row {
			exist0 = exist0 || val == 0
			exist1 = exist1 || val == 1
		}
	}
	if !(exist0 && exist1) {
		return -1
	}

	for i := range distances {
		for j := range distances[i] {
			if grid[i][j] == 0 {
				continue
			}

			bfs(i, j, distances, grid, visited)
		}
	}

	var res int
	for i := range distances {
		for _, dis := range distances[i] {
			res = max(dis, res)
		}
	}

	return res
}

func bfs(i, j int, distances, grid [][]int, visited [][]bool) {
	queue := [][]int{{i, j, 0}}
	for len(queue) > 0 {
		item := queue[0]
		i := item[0]
		j := item[1]
		dis := item[2]
		queue = queue[1:]

		if i > 0 && j > 0 && grid[i-1][j-1] == 0 && (distances[i-1][j-1] == 0 || distances[i-1][j-1] > dis+2) {
			distances[i-1][j-1] = dis + 2
			queue = append(queue, []int{i - 1, j - 1, distances[i-1][j-1]})
		}
		if i > 0 && grid[i-1][j] == 0 && (distances[i-1][j] == 0 || distances[i-1][j] > dis+1) {
			distances[i-1][j] = dis + 1
			queue = append(queue, []int{i - 1, j, distances[i-1][j]})
		}
		if i > 0 && j < len(grid[i])-1 && grid[i-1][j+1] == 0 && (distances[i-1][j+1] == 0 || distances[i-1][j+1] > dis+2) {
			distances[i-1][j+1] = dis + 2
			queue = append(queue, []int{i - 1, j + 1, distances[i-1][j+1]})
		}
		if j > 0 && grid[i][j-1] == 0 && (distances[i][j-1] == 0 || distances[i][j-1] > dis+1) {
			distances[i][j-1] = dis + 1
			queue = append(queue, []int{i, j - 1, distances[i][j-1]})
		}
		if j < len(grid[i])-1 && grid[i][j+1] == 0 && (distances[i][j+1] == 0 || distances[i][j+1] > dis+1) {
			distances[i][j+1] = dis + 1
			queue = append(queue, []int{i, j + 1, distances[i][j+1]})
		}
		if i < len(grid)-1 && j > 0 && grid[i+1][j-1] == 0 && (distances[i+1][j-1] == 0 || distances[i+1][j-1] > dis+2) {
			distances[i+1][j-1] = dis + 2
			queue = append(queue, []int{i + 1, j - 1, distances[i+1][j-1]})
		}
		if i < len(grid)-1 && grid[i+1][j] == 0 && (distances[i+1][j] == 0 || distances[i+1][j] > dis+1) {
			distances[i+1][j] = dis + 1
			queue = append(queue, []int{i + 1, j, distances[i+1][j]})
		}
		if i < len(grid)-1 && j < len(grid[i])-1 && grid[i+1][j+1] == 0 && (distances[i+1][j+1] == 0 || distances[i+1][j+1] > dis+2) {
			distances[i+1][j+1] = dis + 2
			queue = append(queue, []int{i + 1, j + 1, distances[i+1][j+1]})
		}
	}
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func Test1162(t *testing.T) {
	fmt.Println(maxDistance([][]int{
		{1, 0, 1}, {0, 0, 0}, {1, 0, 1},
	}))
	fmt.Println(maxDistance([][]int{
		{1, 0, 0}, {0, 0, 0}, {0, 0, 0},
	}))
	fmt.Println(maxDistance([][]int{
		{0, 0, 0, 0}, {0, 0, 0, 0}, {0, 0, 0, 0}, {0, 0, 0, 0},
	}))
	fmt.Println(maxDistance([][]int{
		{1, 0, 0, 0, 0, 1, 0, 0, 0, 1},
		{1, 1, 0, 1, 1, 1, 0, 1, 1, 0},
		{0, 1, 1, 0, 1, 0, 0, 1, 0, 0},
		{1, 0, 1, 0, 1, 0, 0, 0, 0, 0},
		{0, 1, 0, 0, 0, 1, 1, 0, 1, 1},
		{0, 0, 1, 0, 0, 1, 0, 1, 0, 1},
		{0, 0, 0, 1, 1, 1, 1, 0, 0, 1},
		{0, 1, 0, 0, 1, 0, 0, 1, 0, 0},
		{0, 0, 0, 0, 0, 1, 1, 1, 0, 0},
		{1, 1, 0, 1, 1, 1, 1, 1, 0, 0},
	}))
	t.Error()
}
