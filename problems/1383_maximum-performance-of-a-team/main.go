package main

import (
	"sort"
)

func maxPerformance(n int, speed []int, efficiency []int, k int) int {
	var data [][]int
	for i := 0; i < n; i++ {
		data = append(data, []int{speed[i], efficiency[i]})
	}
	sort.Slice(data, func(i, j int) bool {
		if data[i][1] != data[j][1] {
			return data[i][1] > data[j][1]
		}

		return data[i][0] > data[j][0]
	})

	var ans int
	for i := 0; i < n; i++ {
		ans = max(ans, (data[i][1]*maxKSum(k, data[:i+1]))%1000000007)
	}

	return ans
}

func maxKSum(k int, data [][]int) int {
	tmp := make([]int, len(data))
	for i := 0; i < len(data); i++ {
		tmp[i] = data[i][0]
	}
	var sum int
	for i := 0; i < k && len(tmp) != 0; i++ {
		buildHeap(tmp)
		sum = (sum + tmp[0]) % 1000000007
		tmp = tmp[1:]
	}
	return sum
}

func buildHeap(data []int) {
	for i := len(data) / 2; i >= 1; i-- {
		mid := i - 1
		left := i*2 - 1
		right := i * 2

		if right < len(data) && data[right] > data[mid] {
			data[mid], data[right] = data[right], data[mid]
		}

		if data[left] > data[mid] {
			data[mid], data[left] = data[left], data[mid]
		}
	}
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
