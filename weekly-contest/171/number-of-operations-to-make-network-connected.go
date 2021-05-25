// +build 1713

package main

func makeConnected(n int, connections [][]int) int {
	if len(connections) < n-1 {
		return -1
	}

	mapStartToEnds := make(map[int][]int)
	for _, connection := range connections {
		if _, ok := mapStartToEnds[connection[0]]; !ok {
			mapStartToEnds[connection[0]] = []int{}
		}
		if _, ok := mapStartToEnds[connection[1]]; !ok {
			mapStartToEnds[connection[1]] = []int{}
		}
		mapStartToEnds[connection[0]] = append(mapStartToEnds[connection[0]], connection[1])
		mapStartToEnds[connection[1]] = append(mapStartToEnds[connection[1]], connection[0])
	}

	var blocks int

	visited := make([]bool, n)
	for i := 0; i < n; i++ {
		if visited[i] {
			continue
		}

		visited[i] = true
		blocks++

		nodes := []int{i}
		for len(nodes) != 0 {
			node := nodes[0]
			nodes = nodes[1:len(nodes)]

			for _, end := range mapStartToEnds[node] {
				if !visited[end] {
					visited[end] = true
					nodes = append(nodes, end)
				}
			}
		}
	}

	return blocks - 1
}

func main() {
	println(makeConnected(6, [][]int{
		[]int{0, 1}, []int{0, 2}, []int{0, 3}, []int{1, 2}, []int{1, 3},
	}))
	println(makeConnected(6, [][]int{
		[]int{0, 1}, []int{0, 2}, []int{0, 3}, []int{1, 2},
	}))
	println(makeConnected(5, [][]int{
		[]int{0, 1}, []int{0, 2}, []int{3, 4}, []int{2, 3},
	}))
}
