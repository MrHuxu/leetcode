package main

import (
	"container/heap"
	"fmt"
	"math"
	"testing"
)

type Heap []int

func (h Heap) Len() int            { return len(h) }
func (h Heap) Less(i, j int) bool  { return h[i] > h[j] }
func (h Heap) Swap(i, j int)       { h[i], h[j] = h[j], h[i] }
func (h *Heap) Push(x interface{}) { *h = append(*h, x.(int)) }
func (h *Heap) Pop() interface{} {
	n := h.Len()
	item := (*h)[n-1]
	*h = (*h)[:n-1]
	return item
}

func minimumDeviation(nums []int) int {
	var h Heap
	minVal := math.MaxInt
	for _, num := range nums {
		item := num
		if num%2 != 0 {
			item *= 2
		}
		minVal = min(minVal, item)
		heap.Push(&h, item)
	}
	heap.Init(&h)

	ret := math.MaxInt
	for {
		maxVal := heap.Pop(&h).(int)
		ret = min(ret, maxVal-minVal)
		if maxVal%2 == 0 {
			minVal = min(minVal, maxVal/2)
			heap.Push(&h, maxVal/2)
		} else {
			break
		}
	}
	return ret
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func Test1675(t *testing.T) {
	fmt.Println(minimumDeviation([]int{1, 2, 3, 4}))
	fmt.Println(minimumDeviation([]int{4, 1, 5, 20, 3}))
	fmt.Println(minimumDeviation([]int{2, 10, 8}))
	t.Error()
}
