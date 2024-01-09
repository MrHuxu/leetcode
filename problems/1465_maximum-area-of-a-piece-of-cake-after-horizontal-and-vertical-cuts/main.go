package main

import "sort"

func maxArea(h int, w int, horizontalCuts []int, verticalCuts []int) int {
	sort.Slice(horizontalCuts, func(i, j int) bool {
		return horizontalCuts[i] < horizontalCuts[j]
	})
	sort.Slice(verticalCuts, func(i, j int) bool {
		return verticalCuts[i] < verticalCuts[j]
	})

	maxH := max(horizontalCuts[0], h-horizontalCuts[len(horizontalCuts)-1])
	maxW := max(verticalCuts[0], w-verticalCuts[len(verticalCuts)-1])
	for i := 0; i < len(horizontalCuts)-1; i++ {
		maxH = max(maxH, horizontalCuts[i+1]-horizontalCuts[i])
	}
	for i := 0; i < len(verticalCuts)-1; i++ {
		maxW = max(maxW, verticalCuts[i+1]-verticalCuts[i])
	}
	return maxH * maxW % 1000000007
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
