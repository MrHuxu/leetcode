package main

func closedIsland(grid [][]int) int {
	visited := make([][]bool, len(grid))
	for i := range visited {
		visited[i] = make([]bool, len(grid[0]))
	}

	var dfs func(i int, j int) (touchBorder bool)
	dfs = func(i, j int) bool {
		if i < 0 || i >= len(grid) || j < 0 || j >= len(grid[0]) {
			return true
		}

		if grid[i][j] == 1 {
			return false
		}

		if visited[i][j] {
			return false
		}
		visited[i][j] = true

		up := dfs(i-1, j)
		left := dfs(i, j-1)
		right := dfs(i, j+1)
		bottom := dfs(i+1, j)

		return up || left || right || bottom
	}

	var result int
	for i := range grid {
		for j := range grid[i] {
			if grid[i][j] == 0 && !visited[i][j] && !dfs(i, j) {
				result++
			}
		}
	}

	return result
}

func main() {
	println(closedIsland([][]int{
		[]int{1, 1, 1, 1, 1, 1, 1, 0},
		[]int{1, 0, 0, 0, 0, 1, 1, 0},
		[]int{1, 0, 1, 0, 1, 1, 1, 0},
		[]int{1, 0, 0, 0, 0, 1, 0, 1},
		[]int{1, 1, 1, 1, 1, 1, 1, 0},
	}))

	println(closedIsland([][]int{
		[]int{0, 0, 1, 1, 0, 1, 0, 0, 1, 0},
		[]int{1, 1, 0, 1, 1, 0, 1, 1, 1, 0},
		[]int{1, 0, 1, 1, 1, 0, 0, 1, 1, 0},
		[]int{0, 1, 1, 0, 0, 0, 0, 1, 0, 1},
		[]int{0, 0, 0, 0, 0, 0, 1, 1, 1, 0},
		[]int{0, 1, 0, 1, 0, 1, 0, 1, 1, 1},
		[]int{1, 0, 1, 0, 1, 1, 0, 0, 0, 1},
		[]int{1, 1, 1, 1, 1, 1, 0, 0, 0, 0},
		[]int{1, 1, 1, 0, 0, 1, 0, 1, 0, 1},
		[]int{1, 1, 1, 0, 1, 1, 0, 1, 1, 0},
	}))
}
