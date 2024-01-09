package main

import (
	"fmt"
	"testing"
)

func numEnclaves(grid [][]int) int {
	visited := make([][]bool, len(grid))
	for i := range grid {
		visited[i] = make([]bool, len(grid[0]))
	}

	var ret int
	for i, row := range grid {
		for j, cell := range row {
			if cell == 0 || visited[i][j] {
				continue
			}
			if cnt, isEnclave := dfs(i, j, grid, visited); isEnclave {
				ret += cnt
			}
		}
	}
	return ret
}

var directions = [][]int{
	{-1, 0},
	{0, -1},
	{1, 0},
	{0, 1},
}

func dfs(i, j int, grid [][]int, visited [][]bool) (int, bool) {
	visited[i][j] = true
	cnt := 1
	isEnclave := i != 0 && i != len(grid)-1 && j != 0 && j != len(grid[0])-1
	for _, direction := range directions {
		ii, jj := i+direction[0], j+direction[1]
		if ii < 0 || ii >= len(grid) || jj < 0 || jj >= len(grid[0]) || grid[ii][jj] == 0 || visited[ii][jj] {
			continue
		}

		c, i := dfs(ii, jj, grid, visited)
		cnt += c
		isEnclave = isEnclave && i
	}
	return cnt, isEnclave
}

func Test1020(t *testing.T) {
	fmt.Println(numEnclaves([][]int{
		{0, 0, 0, 0}, {1, 0, 1, 0}, {0, 1, 1, 0}, {0, 0, 0, 0},
	}))
	fmt.Println(numEnclaves([][]int{
		{0, 1, 1, 0}, {0, 0, 1, 0}, {0, 0, 1, 0}, {0, 0, 0, 0},
	}))
	t.Error()
}
