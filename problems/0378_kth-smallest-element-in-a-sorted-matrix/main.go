package main

func kthSmallest(matrix [][]int, k int) int {
	used := make([][]bool, len(matrix))
	for i := range used {
		used[i] = make([]bool, len(matrix[i]))
	}

	if k == 1 {
		return matrix[0][0]
	}

	data := map[int][]int{
		1: {0, 0, 0},
	}
	for i := 2; i <= k; i++ {
		var curr []int
		var val int
		for j, d := range data {
			if d[0]+1 < len(matrix) && used[d[0]+1][d[1]] && d[1]+1 < len(matrix[0]) && used[d[0]][d[1]+1] {
				delete(data, j)
				continue
			}

			if d[0]+1 < len(matrix) && !used[d[0]+1][d[1]] {
				if curr == nil || matrix[d[0]+1][d[1]] < val {
					curr = []int{d[0] + 1, d[1]}
					val = matrix[d[0]+1][d[1]]
				}
			}

			if d[1]+1 < len(matrix[0]) && !used[d[0]][d[1]+1] {
				if curr == nil || matrix[d[0]][d[1]+1] < val {
					curr = []int{d[0], d[1] + 1}
					val = matrix[d[0]][d[1]+1]
				}
			}
		}
		used[curr[0]][curr[1]] = true
		data[i] = curr
	}
	return matrix[data[k][0]][data[k][1]]
}
