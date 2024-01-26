package main

type NumMatrix struct {
	sums [][]int
}

func Constructor(matrix [][]int) NumMatrix {
	nm := NumMatrix{sums: make([][]int, len(matrix))}
	for i := range nm.sums {
		nm.sums[i] = make([]int, len(matrix[i]))

		for j := 0; j < len(nm.sums[i]); j++ {
			switch {
			case i == 0 && j == 0:
				nm.sums[i][j] = matrix[i][j]

			case i == 0:
				nm.sums[i][j] = matrix[i][j] + nm.sums[i][j-1]

			case j == 0:
				nm.sums[i][j] = nm.sums[i-1][j] + matrix[i][j]

			default:
				nm.sums[i][j] = nm.sums[i-1][j] + nm.sums[i][j-1] - nm.sums[i-1][j-1] + matrix[i][j]
			}
		}
	}
	return nm
}

func (this *NumMatrix) SumRegion(row1 int, col1 int, row2 int, col2 int) int {
	total := this.sums[row2][col2]

	var up, left, upLeft int
	if row1 > 0 {
		up = this.sums[row1-1][col2]
	}
	if col1 > 0 {
		left = this.sums[row2][col1-1]
	}
	if row1 > 0 && col1 > 0 {
		upLeft = this.sums[row1-1][col1-1]
	}
	return total - up - left + upLeft
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * obj := Constructor(matrix);
 * param_1 := obj.SumRegion(row1,col1,row2,col2);
 */
