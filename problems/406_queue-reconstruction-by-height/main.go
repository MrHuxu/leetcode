package main

import "fmt"

func reconstructQueue(people [][]int) [][]int {
	var ret [][]int

	arr := make([][]int, len(people))
	for i, p := range people {
		arr[i] = []int{p[0], p[1], p[1]}
	}

	for len(arr) > 0 {
		buildHeap(arr)
		ret = append(ret, []int{arr[0][0], arr[0][1]})
		for i := 1; i < len(arr); i++ {
			if arr[0][0] >= arr[i][0] {
				arr[i][2]--
			}
		}
		arr = arr[1:]
	}

	return ret
}

func buildHeap(arr [][]int) {
	for i := len(arr) / 2; i >= 1; i-- {
		mid := i - 1
		left := mid*2 + 1
		right := (mid + 1) * 2

		if arr[left][2] < arr[mid][2] || (arr[left][2] == arr[mid][2] && arr[left][0] < arr[mid][0]) {
			arr[left], arr[mid] = arr[mid], arr[left]
		}

		if right < len(arr) && (arr[right][2] < arr[mid][2] || (arr[right][2] == arr[mid][2] && arr[right][0] < arr[mid][0])) {
			arr[right], arr[mid] = arr[mid], arr[right]
		}
	}
}

func main() {
	fmt.Println(reconstructQueue([][]int{
		{7, 0}, {4, 4}, {7, 1}, {5, 0}, {6, 1}, {5, 2},
	}))
	fmt.Println(reconstructQueue([][]int{
		{6, 0}, {5, 0}, {4, 0}, {3, 2}, {2, 2}, {1, 4},
	}))
	// Output: [[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]
}
