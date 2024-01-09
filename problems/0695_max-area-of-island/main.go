package main

func maxAreaOfIsland(grid [][]int) int {
	visited := make([][]bool, len(grid))
	for i := range visited {
		visited[i] = make([]bool, len(grid[i]))
	}

	var ans int
	for i := 0; i < len(grid); i++ {
		for j := 0; j < len(grid[i]); j++ {
			if grid[i][j] == 1 && !visited[i][j] {
				ans = max(ans, dfs(i, j, grid, visited))
			}
		}
	}
	return ans
}

var directions = [][]int{
	{1, 0},
	{-1, 0},
	{0, 1},
	{0, -1},
}

func dfs(i, j int, grid [][]int, visited [][]bool) int {
	ret := 1
	visited[i][j] = true
	for _, direction := range directions {
		nexti, nextj := i+direction[0], j+direction[1]
		if nexti >= 0 && nexti < len(grid) && nextj >= 0 && nextj < len(grid[nexti]) && grid[nexti][nextj] == 1 && !visited[nexti][nextj] {
			ret += dfs(nexti, nextj, grid, visited)
		}
	}
	return ret
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
