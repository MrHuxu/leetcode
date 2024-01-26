package main

import (
	"fmt"
)

func findRedundantConnection(edges [][]int) []int {
	board := make([][]int, 1001)
	for i := range board {
		board[i] = make([]int, 1001)
	}

	N := 0
	for _, edge := range edges {
		if edge[1] > N {
			N = edge[1]
		}
		board[edge[0]][edge[0]] = 1
		board[edge[1]][edge[1]] = 1
	}

	for _, edge := range edges {
		from := edge[0]
		to := edge[1]
		if board[from][to] == 1 {
			return edge
		}

		board[from][to] = 1
		for i := 1; i <= N; i++ {
			if board[from][i] == 1 || board[i][to] == 1 {
				for j := 1; j <= N; j++ {
					if board[from][j] == 1 || board[j][to] == 1 {
						board[i][j] = 1
						board[j][i] = 1
					}
				}
			}
		}
	}

	return edges[0]
}

func main() {
	edges := [][]int{
		[]int{1, 2},
		[]int{1, 3},
		[]int{2, 3},
	}
	fmt.Println(findRedundantConnection(edges))

	edges = [][]int{
		[]int{1, 2},
		[]int{2, 3},
		[]int{3, 4},
		[]int{1, 4},
		[]int{1, 5},
	}
	fmt.Println(findRedundantConnection(edges))
}
