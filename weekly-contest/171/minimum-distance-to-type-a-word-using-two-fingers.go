// +build 1714
// TODO

package main

import "math"

var mapLetterToPos = map[byte][]int{
	'A': []int{0, 0},
	'B': []int{0, 1},
	'C': []int{0, 2},
	'D': []int{0, 3},
	'E': []int{0, 4},
	'F': []int{0, 5},
	'G': []int{1, 0},
	'H': []int{1, 1},
	'I': []int{1, 2},
	'J': []int{1, 3},
	'K': []int{1, 4},
	'L': []int{1, 5},
	'M': []int{2, 0},
	'N': []int{2, 1},
	'O': []int{2, 2},
	'P': []int{2, 3},
	'Q': []int{2, 4},
	'R': []int{2, 5},
	'S': []int{3, 0},
	'T': []int{3, 1},
	'U': []int{3, 2},
	'V': []int{3, 3},
	'W': []int{3, 4},
	'X': []int{3, 5},
	'Y': []int{4, 0},
	'Z': []int{4, 1},
}

func minimumDistance(word string) int {
	result := int(math.MaxInt32)

	var dfs func(int, int, int, int)
	dfs = func(first, second, idx, sum int) {
		if idx == len(word) {
			result = min(result, sum)
			return
		}

		if result != 0 && sum > result {
			return
		}

		if first == -1 {
			dfs(idx, second, idx+1, sum)
			return
		}
		dfs(idx, second, idx+1, sum+abs(mapLetterToPos[word[first]][0]-mapLetterToPos[word[idx]][0])+abs(mapLetterToPos[word[first]][1]-mapLetterToPos[word[idx]][1]))

		if second == -1 {
			dfs(first, idx, idx+1, sum)
		} else {
			dfs(first, idx, idx+1, sum+abs(mapLetterToPos[word[second]][0]-mapLetterToPos[word[idx]][0])+abs(mapLetterToPos[word[second]][1]-mapLetterToPos[word[idx]][1]))
		}
	}
	dfs(-1, -1, 0, 0)

	return result
}

func abs(n int) int {
	if n < 0 {
		return -n
	}
	return n
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func main() {
	println(minimumDistance("CAKE"))
	println(minimumDistance("HAPPY"))
	println(minimumDistance("NEW"))
	println(minimumDistance("YEAR"))
}
