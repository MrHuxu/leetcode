// +build 188_1

package main

func countTriplets(arr []int) int {
	doublets := make(map[int]map[int]int)
	for i := 0; i < len(arr); i++ {
		doublets[i] = map[int]int{
			i: arr[i],
		}
		for j := i + 1; j < len(arr); j++ {
			doublets[i][j] = doublets[i][j-1] ^ arr[j]
		}
	}

	var result int

	for i := 0; i < len(arr)-1; i++ {
		for j := i + 1; j < len(arr); j++ {
			for k := j; k < len(arr); k++ {
				if doublets[i][j-1] == doublets[j][k] {
					result++
				}
			}
		}
	}

	return result
}

func main() {
	println(countTriplets([]int{2, 3, 1, 6, 7}))
	println(countTriplets([]int{1, 1, 1, 1, 1}))
	println(countTriplets([]int{2, 3}))
	println(countTriplets([]int{1, 3, 5, 7, 9}))
	println(countTriplets([]int{7, 11, 12, 9, 5, 2, 7, 17, 22}))
}
