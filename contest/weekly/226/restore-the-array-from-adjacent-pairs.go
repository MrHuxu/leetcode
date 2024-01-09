package main

import "fmt"

func restoreArray(adjacentPairs [][]int) []int {
	if len(adjacentPairs) == 1 {
		return adjacentPairs[0]
	}

	adjacent := make(map[int][]int)
	for _, pair := range adjacentPairs {
		adjacent[pair[0]] = append(adjacent[pair[0]], pair[1])
		adjacent[pair[1]] = append(adjacent[pair[1]], pair[0])
	}

	var head int
	for num, adjacents := range adjacent {
		if len(adjacents) == 1 {
			head = num
			break
		}
	}

	result := []int{head, adjacent[head][0]}
	pre := result[0]
	curr := result[1]
	for {
		if len(adjacent[curr]) == 1 {
			break
		}

		if adjacent[curr][0] == pre {
			result = append(result, adjacent[curr][1])
			pre = curr
			curr = adjacent[curr][1]
		} else {
			result = append(result, adjacent[curr][0])
			pre = curr
			curr = adjacent[curr][0]
		}
	}

	return result
}

func main() {
	fmt.Println(restoreArray([][]int{
		{2, 1}, {3, 4}, {3, 2},
	}))
	fmt.Println(restoreArray([][]int{
		{4, -2}, {1, 4}, {-3, 1},
	}))
	fmt.Println(restoreArray([][]int{
		{100000, -100000},
	}))
}
