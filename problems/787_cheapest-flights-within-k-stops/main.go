package main

func findCheapestPrice(n int, flights [][]int, src int, dst int, k int) int {
	adj := make([]map[int]int, n)
	for _, flight := range flights {
		if adj[flight[0]] == nil {
			adj[flight[0]] = make(map[int]int)
		}
		adj[flight[0]][flight[1]] = flight[2]
	}

	ret, visited, queue := -1, map[int]int{src: 0}, [][]int{{src, 0, 0}}
	for len(queue) > 0 {
		cur, dis, stop := queue[0][0], queue[0][1], queue[0][2]
		queue = queue[1:]
		if cur == dst {
			if ret == -1 || ret > dis {
				ret = dis
			}
		} else if stop <= k {
			for next, price := range adj[cur] {
				if visited[next] == 0 || visited[next] > dis+price {
					visited[next] = dis + price
					queue = append(queue, []int{next, dis + price, stop + 1})
				}
			}
		}
	}
	return ret
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
