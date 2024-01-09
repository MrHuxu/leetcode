// +build 195_0

package main

var mapByteToFunc = map[byte]func(int, int) (int, int){
	'N': func(x, y int) (int, int) {
		return x, y + 1
	},
	'S': func(x, y int) (int, int) {
		return x, y - 1
	},
	'E': func(x, y int) (int, int) {
		return x + 1, y
	},
	'W': func(x, y int) (int, int) {
		return x - 1, y
	},
}

func isPathCrossing(path string) bool {
	visited := make(map[int]map[int]bool)

	var x, y int
	for _, r := range path {
		if _, ok := visited[x]; ok {
			if visited[x][y] {
				return true
			}
			visited[x][y] = true
		} else {
			visited[x] = map[int]bool{y: true}
		}

		x, y = mapByteToFunc[byte(r)](x, y)
	}
	if _, ok := visited[x]; ok {
		if visited[x][y] {
			return true
		}
	}

	return false
}

func main() {
	println(isPathCrossing("NS"))
	println(isPathCrossing("NES"))
	println(isPathCrossing("NESWW"))
}
