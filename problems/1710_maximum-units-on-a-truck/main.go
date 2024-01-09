package main

import (
	"sort"
)

func maximumUnits(boxTypes [][]int, truckSize int) int {
	sort.Slice(boxTypes, func(i, j int) bool {
		return boxTypes[i][1] > boxTypes[j][1]
	})

	var ret int

	for _, boxType := range boxTypes {
		if truckSize <= 0 {
			break
		}

		var cnt int
		if boxType[0] <= truckSize {
			truckSize -= boxType[0]
			cnt = boxType[0]
		} else {
			cnt = truckSize
			truckSize = 0
		}

		ret += boxType[1] * cnt
	}

	return ret
}

func main() {
	println(maximumUnits([][]int{{1, 3}, {2, 2}, {3, 1}}, 4))
	println(maximumUnits([][]int{{5, 10}, {2, 5}, {4, 7}, {3, 9}}, 10))
}
