// +build 213_0

package main

func canFormArray(arr []int, pieces [][]int) bool {
	mapFirstToPiece := make(map[int][]int)
	for _, piece := range pieces {
		mapFirstToPiece[piece[0]] = piece
	}

	for i := 0; i < len(arr); {
		num := arr[i]

		piece, ok := mapFirstToPiece[num]
		if !ok {
			return false
		}
		var j int
		for j = 0; j < len(piece); j++ {
			if arr[i+j] != piece[j] {
				return false
			}
		}

		i += j
	}

	return true
}

func main() {
	println(canFormArray([]int{85}, [][]int{{85}}))
	println(canFormArray([]int{15, 88}, [][]int{{88}, {15}}))
	println(canFormArray([]int{49, 18, 16}, [][]int{{16, 18, 49}}))
	println(canFormArray([]int{91, 4, 64, 78}, [][]int{{78}, {4, 64}, {91}}))
}
