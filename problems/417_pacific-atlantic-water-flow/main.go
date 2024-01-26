package main

func pacificAtlantic(matrix [][]int) [][]int {
	if len(matrix) == 0 || len(matrix[0]) == 0 {
		return nil
	}

	p := make([][]bool, len(matrix))
	a := make([][]bool, len(matrix))
	for i := 0; i < len(matrix); i++ {
		p[i] = make([]bool, len(matrix[i]))
		a[i] = make([]bool, len(matrix[i]))
	}

	for i := 0; i < len(matrix); i++ {
		p[i][0] = true
		a[i][len(matrix[0])-1] = true
	}
	for i := 0; i < len(matrix[0]); i++ {
		p[0][i] = true
		a[len(matrix)-1][i] = true
	}

	for i := 0; i < len(matrix); i++ {
		dfs(i, 0, matrix, p)
		dfs(i, len(matrix[0])-1, matrix, a)
	}
	for i := 0; i < len(matrix[0]); i++ {
		dfs(0, i, matrix, p)
		dfs(len(matrix)-1, i, matrix, a)
	}

	var result [][]int
	for i := 0; i < len(matrix); i++ {
		for j := 0; j < len(matrix[i]); j++ {
			if p[i][j] && a[i][j] {
				result = append(result, []int{i, j})
			}
		}
	}
	return result
}

func dfs(i, j int, matrix [][]int, result [][]bool) {
	if i > 0 && matrix[i-1][j] >= matrix[i][j] && !result[i-1][j] {
		result[i-1][j] = true
		dfs(i-1, j, matrix, result)
	}
	if i < len(matrix)-1 && matrix[i+1][j] >= matrix[i][j] && !result[i+1][j] {
		result[i+1][j] = true
		dfs(i+1, j, matrix, result)
	}
	if j > 0 && matrix[i][j-1] >= matrix[i][j] && !result[i][j-1] {
		result[i][j-1] = true
		dfs(i, j-1, matrix, result)
	}
	if j < len(matrix[0])-1 && matrix[i][j+1] >= matrix[i][j] && !result[i][j+1] {
		result[i][j+1] = true
		dfs(i, j+1, matrix, result)
	}
}
