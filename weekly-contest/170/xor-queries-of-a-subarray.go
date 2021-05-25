// +build 1702

package main

import "fmt"

func xorQueries(arr []int, queries [][]int) []int {
	result := make([]int, len(queries))

	for i, query := range queries {
		tmp := 0

		for j := query[0]; j <= query[1]; j++ {
			tmp = tmp ^ arr[j]
		}

		result[i] = tmp
	}

	return result
}

func main() {
	fmt.Println(xorQueries([]int{1, 3, 4, 8}, [][]int{
		[]int{0, 1}, []int{1, 2}, []int{0, 3}, []int{3, 3},
	}))
	fmt.Println(xorQueries([]int{4, 8, 2, 10}, [][]int{
		[]int{2, 3}, []int{1, 3}, []int{0, 0}, []int{0, 3},
	}))
}
