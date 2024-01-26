package main

func leastBricks(wall [][]int) int {
	var cnt int

	var rowTotal int
	for _, col := range wall[0] {
		rowTotal += col
	}

	m := make(map[int]int)
	for _, row := range wall {
		var sum int
		for _, col := range row {
			sum += col

			if sum != rowTotal {
				m[sum]++
				cnt = max(cnt, m[sum])
			}
		}
	}

	return len(wall) - cnt
}

func max(a, b int) int {
	if a > b {
		return a
	}

	return b
}
