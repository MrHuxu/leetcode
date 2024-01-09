package main

import "fmt"

func snakesAndLadders(board [][]int) int {
	n := len(board)
	target := n * n
	visitedNums := map[int]bool{1: true}
	queue := [][]int{{1, 0}}
	fmt.Println(conv(44, 7))

	for len(queue) > 0 {
		item := queue[0]
		if item[0] == target {
			return item[1]
		}
		queue = queue[1:]

		row, col := conv(item[0], n)
		next := board[row][col]
		if next != -1 {
			if !visitedNums[next] {
				fmt.Println(item)
				queue = append(queue, []int{next, item[1] + 1})
			}
			continue
		}

		for i := item[0] + 1; i <= min(target, item[0]+6); i++ {
			if visitedNums[i] {
				continue
			}
			visitedNums[i] = true
			row, col := conv(i, n)
			if board[row][col] == -1 {
				fmt.Println(item)
				queue = append(queue, []int{i, item[1] + 1})
				continue
			}

			next := board[row][col]
			if visitedNums[next] {
				continue
			}
			visitedNums[next] = true
			fmt.Println(item)
			queue = append(queue, []int{next, item[1] + 1})
		}

	}
	return -1
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func conv(num, n int) (int, int) {
	row := n - 1 - (num-1)/n
	col := (num - 1) % n
	if (num-1)/n%2 == 1 {
		col = n - 1 - col
	}
	return row, col
}

func main() {
	fmt.Println(snakesAndLadders([][]int{
		{-1, -1, 27, 13, -1, 25, -1},
		{-1, -1, -1, -1, -1, -1, -1},
		{44, -1, 8, -1, -1, 2, -1},
		{-1, 30, -1, -1, -1, -1, -1},
		{3, -1, 20, -1, 46, 6, -1},
		{-1, -1, -1, -1, -1, -1, 29},
		{-1, 29, 21, 33, -1, -1, -1},
	}))
	// fmt.Println(snakesAndLadders([][]int{
	// 	{-1, -1, -1, 46, 47, -1, -1, -1}, {51, -1, -1, 63, -1, 31, 21, -1}, {-1, -1, 26, -1, -1, 38, -1, -1}, {-1, -1, 11, -1, 14, 23, 56, 57}, {11, -1, -1, -1, 49, 36, -1, 48}, {-1, -1, -1, 33, 56, -1, 57, 21}, {-1, -1, -1, -1, -1, -1, 2, -1}, {-1, -1, -1, 8, 3, -1, 6, 56},
	// }))
	// fmt.Println(snakesAndLadders([][]int{
	// 	{-1, -1, 30, 14, 15, -1},
	// 	{23, 9, -1, -1, -1, 9},
	// 	{12, 5, 7, 24, -1, 30},
	// 	{10, -1, -1, -1, 25, 17},
	// 	{32, -1, 28, -1, -1, 32},
	// 	{-1, -1, 23, -1, 13, 19},
	// }))
	// fmt.Println(snakesAndLadders([][]int{
	// 	{-1, 4, -1},
	// 	{6, 2, 6},
	// 	{-1, 3, -1},
	// }))
	// fmt.Println(snakesAndLadders([][]int{
	// 	{-1, -1, -1}, {-1, 9, 8}, {-1, 8, 9},
	// }))
	// fmt.Println(snakesAndLadders([][]int{
	// 	{-1, -1, -1, -1, -1, -1}, {-1, -1, -1, -1, -1, -1}, {-1, -1, -1, -1, -1, -1}, {-1, 35, -1, -1, 13, -1}, {-1, -1, -1, -1, -1, -1}, {-1, 15, -1, -1, -1, -1},
	// }))
	// fmt.Println(snakesAndLadders([][]int{
	// 	{-1, -1}, {-1, 3},
	// }))
}
