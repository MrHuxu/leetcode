package main

func countRestrictedPaths(n int, edges [][]int) int {
	edgesMap := make(map[int]map[int]int)
	for _, edge := range edges {
		if edgesMap[edge[0]] == nil {
			edgesMap[edge[0]] = make(map[int]int)
		}
		if edgesMap[edge[1]] == nil {
			edgesMap[edge[1]] = make(map[int]int)
		}
		edgesMap[edge[0]][edge[1]] = edge[2]
		edgesMap[edge[1]][edge[0]] = edge[2]
	}
	return helper(1, n, edgesMap, map[int]bool{}, map[int]int{})
}

func helper(start, n int, edgesMap map[int]map[int]int, visited map[int]bool, distanceMap map[int]int) int {
	if start == n {
		distanceMap[n] = 0
		return 1
	}

	nextToResult := make(map[int]int)
	for next, weight := range edgesMap[start] {
		if !visited[next] {
			visited[next] = true
			nextResult := helper(next, n, edgesMap, visited, distanceMap)

			if nextDistance, ok1 := distanceMap[next]; ok1 {
				nextToResult[next] = nextResult

				if val, ok := distanceMap[start]; ok {
					if nextDistance+weight < val {
						distanceMap[start] = nextDistance + weight
					}
				} else {
					distanceMap[start] = nextDistance + weight
				}
			}
			visited[next] = false
		}
	}

	var result int
	for next := range edgesMap[start] {
		if distance, ok := distanceMap[next]; ok && distanceMap[start] > distance {
			result += nextToResult[next]
		}
	}

	return result
}

func main() {
	println(countRestrictedPaths(
		5, [][]int{
			{1, 2, 3}, {1, 3, 3}, {2, 3, 1}, {1, 4, 2}, {5, 2, 2}, {3, 5, 1}, {5, 4, 10},
		},
	)) // 3

	println(countRestrictedPaths(
		7, [][]int{
			{1, 3, 1}, {4, 1, 2}, {7, 3, 4}, {2, 5, 3}, {5, 6, 1}, {6, 7, 2}, {7, 5, 3}, {2, 6, 4},
		},
	)) // 1
}
