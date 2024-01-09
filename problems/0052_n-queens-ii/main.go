package main

func totalNQueens(n int) int {
	var ans int

	var dfs func(board [][]byte, i int)
	dfs = func(board [][]byte, i int) {
		if i == n {
			ans++
			return
		}

		for j := range board[i] {
			var hasQ bool
			for k := i - 1; k >= 0; k-- {
				if board[k][j] == 'Q' {
					hasQ = true
					break
				}
			}

			if !hasQ {
				for k, l := i-1, j-1; k >= 0 && l >= 0; k, l = k-1, l-1 {
					if board[k][l] == 'Q' {
						hasQ = true
						break
					}
				}
			}
			if !hasQ {
				for k, l := i-1, j+1; k >= 0 && l < n; k, l = k-1, l+1 {
					if board[k][l] == 'Q' {
						hasQ = true
						break
					}
				}
			}
			if !hasQ {
				for k, l := i+1, j+1; k < n && l < n; k, l = k+1, l+1 {
					if board[k][l] == 'Q' {
						hasQ = true
						break
					}
				}
			}
			if !hasQ {
				for k, l := i+1, j-1; k < n && l >= 0; k, l = k+1, l-1 {
					if board[k][l] == 'Q' {
						hasQ = true
						break
					}
				}
			}

			if !hasQ {
				board[i][j] = 'Q'
				dfs(board, i+1)
				board[i][j] = '.'
			}
		}
	}
	board := make([][]byte, n)
	for i := range board {
		board[i] = make([]byte, n)
		for j := range board[i] {
			board[i][j] = '.'
		}
	}
	dfs(board, 0)

	return ans
}
