package main

import (
	"fmt"
	"testing"
)

var n int
var island [][]int
var moves = [][]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}

func shortestBridge(grid [][]int) int {
	n = len(grid)

	island = nil
	markIsland(grid)

	return bfs(grid)
}

func markIsland(grid [][]int) {
	for i := range grid {
		for j := range grid[i] {
			if grid[i][j] == 1 {
				dfs(i, j, grid)
				return
			}
		}
	}
}

func dfs(i, j int, grid [][]int) {
	if i < 0 || i >= n || j < 0 || j >= n || grid[i][j] != 1 {
		return
	}

	grid[i][j] = -1
	island = append(island, []int{i, j, 0})
	dfs(i-1, j, grid)
	dfs(i+1, j, grid)
	dfs(i, j-1, grid)
	dfs(i, j+1, grid)
}

func isValid(grid [][]int, i, j int) bool {
	return 0 <= i && i < n && 0 <= j && j < n && grid[i][j] != -1
}

func bfs(grid [][]int) int {
	for len(island) > 0 {
		block := island[0]
		island = island[1:]
		for k := 0; k < 4; k++ {
			i, j := block[0]+moves[k][0], block[1]+moves[k][1]
			if isValid(grid, i, j) {
				if grid[i][j] == 1 {
					return block[2]
				}
				grid[i][j] = -1
				island = append(island, []int{i, j, block[2] + 1})
			}
		}
	}
	return 0
}

func Test934(t *testing.T) {
	fmt.Println(shortestBridge([][]int{
		{0, 1, 0, 0, 0, 0},
		{0, 1, 1, 1, 0, 0},
		{0, 0, 0, 0, 0, 0},
		{0, 0, 0, 0, 0, 0},
		{0, 0, 0, 0, 0, 0},
		{1, 1, 0, 0, 0, 0},
	}))
	fmt.Println(shortestBridge([][]int{
		{0, 1},
		{1, 0},
	}))
	fmt.Println(shortestBridge([][]int{
		{0, 1, 0},
		{0, 0, 0},
		{0, 0, 1},
	}))
	fmt.Println(shortestBridge([][]int{
		{1, 1, 1, 1, 1},
		{1, 0, 0, 0, 1},
		{1, 0, 1, 0, 1},
		{1, 0, 0, 0, 1},
		{1, 1, 1, 1, 1},
	}))
	fmt.Println(shortestBridge([][]int{
		{0, 0, 1, 0, 1},
		{0, 1, 1, 0, 1},
		{0, 1, 0, 0, 1},
		{0, 0, 0, 0, 0},
		{0, 0, 0, 0, 0},
	}))
	fmt.Println(shortestBridge([][]int{
		{1, 1, 0, 1, 0, 0, 1, 1, 0, 0},
		{0, 1, 1, 1, 1, 1, 1, 1, 0, 0},
		{0, 0, 1, 0, 1, 1, 0, 0, 0, 0},
		{0, 0, 0, 1, 1, 0, 1, 1, 0, 0},
		{0, 0, 0, 1, 0, 0, 1, 0, 1, 0},
		{0, 0, 0, 0, 1, 1, 1, 1, 1, 1},
		{0, 0, 0, 0, 1, 1, 1, 0, 1, 0},
		{0, 0, 0, 0, 1, 1, 1, 1, 1, 0},
		{0, 0, 0, 0, 0, 1, 1, 0, 0, 0},
		{0, 0, 0, 0, 0, 0, 1, 0, 0, 0},
	}))
	t.Error()
}
