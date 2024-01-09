package main

func diagonalSum(mat [][]int) int {
    n := len(mat)
    var ret int
    for i := 0; i < n; i++ {
        ret += mat[i][i] + mat[n - 1 - i][i]
    }
    if n % 2 == 1 {
        ret -= mat[n / 2][n / 2]
    }
    return ret
}