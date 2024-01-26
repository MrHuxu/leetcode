package main

import (
	"container/heap"
	"fmt"
	"sort"
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

func findMaximizedCapital(k int, w int, profits []int, capital []int) int {
	var pairs [][]int
	for i := range profits {
		pairs = append(pairs, []int{profits[i], capital[i]})
	}
	sort.Slice(pairs, func(i, j int) bool { return pairs[i][1] < pairs[j][1] })

	var h Heap
	heap.Init(&h)

	var cnt int
	for i := 0; i < k; i++ {
		for cnt < len(pairs) && pairs[cnt][1] <= w {
			heap.Push(&h, pairs[cnt][0])
			cnt++
		}
		if h.Len() == 0 {
			break
		}
		w += heap.Pop(&h).(int)
	}
	return w
}

func Test502(t *testing.T) {
	fmt.Println(findMaximizedCapital(2, 0, []int{1, 2, 3}, []int{0, 1, 1}))
	fmt.Println(findMaximizedCapital(3, 0, []int{1, 2, 3}, []int{0, 1, 2}))
	fmt.Println(findMaximizedCapital(10, 0, []int{1, 2, 3}, []int{0, 1, 2}))
	fmt.Println(findMaximizedCapital(1, 2, []int{1, 2, 3}, []int{1, 1, 2}))
	t.Error()
}

/*
Example 1:

Input: k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]
Output: 4
Explanation: Since your initial capital is 0, you can only start the project indexed 0.
After finishing it you will obtain profit 1 and your capital becomes 1.
With capital 1, you can either start the project indexed 1 or the project indexed 2.
Since you can choose at most 2 projects, you need to finish the project indexed 2 to get the maximum capital.
Therefore, output the final maximized capital, which is 0 + 1 + 3 = 4.
Example 2:

Input: k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]
Output: 6
*/
