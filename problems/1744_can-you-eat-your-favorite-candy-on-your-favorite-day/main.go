package main

import (
	"fmt"
)

func canEat(candiesCount []int, queries [][]int) []bool {
	result := make([]bool, len(queries))
	for i, query := range queries {
		var sum int
		for i := 0; i < query[0]; i++ {
			sum += candiesCount[i]
		}

		fmt.Println(query, sum, candiesCount[query[0]])
		result[i] = query[1] <= (sum+candiesCount[query[0]]-1) && (sum+1) <= query[1]*query[2]
	}

	return result
}

func main() {
	// fmt.Println(canEat([]int{7, 4, 5, 3, 8}, [][]int{
	// 	{0, 2, 2}, {4, 2, 4}, {2, 13, 1000000000},
	// }))
	// fmt.Println(canEat([]int{5, 2, 6, 4, 1}, [][]int{
	// 	{3, 1, 2}, {4, 10, 3}, {3, 10, 100}, {4, 100, 30}, {1, 3, 1},
	// }))
	fmt.Println(canEat([]int{46, 5, 47, 48, 43, 34, 15, 26, 11, 25, 41, 47, 15, 25, 16, 50, 32, 42, 32, 21, 36, 34, 50, 45, 46, 15, 46, 38, 50, 12, 3, 26, 26, 16, 23, 1, 4, 48, 47, 32, 47, 16, 33, 23, 38, 2, 19, 50, 6, 19, 29, 3, 27, 12, 6, 22, 33, 28, 7, 10, 12, 8, 13, 24, 21, 38, 43, 26, 35, 18, 34, 3, 14, 48, 50, 34, 38, 4, 50, 26, 5, 35, 11, 2, 35, 9, 11, 31, 36, 20, 21, 37, 18, 34, 34, 10, 21, 8, 5},
		[][]int{{85, 54, 42}}))
}
