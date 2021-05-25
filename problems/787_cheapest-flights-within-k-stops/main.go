package main

func findCheapestPrice(n int, flights [][]int, src int, dst int, K int) int {
	edges := make(map[int]map[int]int)
	for _, flight := range flights {
		if _, ok := edges[flight[0]]; !ok {
			edges[flight[0]] = make(map[int]int)
		}

		edges[flight[0]][flight[1]] = flight[2]
	}

	result := -1
	var dfs func(current, depth, cost int, used map[int]bool)
	dfs = func(current, depth, cost int, used map[int]bool) {
		if result != -1 && cost > result {
			return
		}

		if depth <= K {
			for next, val := range edges[current] {
				if next != dst {
					used[next] = true
					dfs(next, depth+1, cost+val, used)
					used[next] = false
				} else {
					if result == -1 {
						result = cost + val
					} else {
						result = min(result, cost+val)
					}
				}
			}
		}
	}
	dfs(src, 0, 0, map[int]bool{src: true})

	return result
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func main() {
	println(findCheapestPrice(3, [][]int{
		{0, 1, 100}, {1, 2, 100}, {0, 2, 500},
	}, 0, 2, 1))
	println(findCheapestPrice(3, [][]int{
		{0, 1, 100}, {1, 2, 100}, {0, 2, 500},
	}, 0, 2, 0))
	println(findCheapestPrice(3, [][]int{
		{0, 1, 2}, {1, 2, 1}, {2, 0, 10},
	}, 1, 2, 1))
}
