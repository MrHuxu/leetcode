package main

import (
	"sort"
)

func advantageCount(A []int, B []int) []int {
	sort.Slice(A, func(i, j int) bool {
		return A[i] < A[j]
	})
	cloneB := make([]int, len(B))
	copy(cloneB, B)
	sort.Slice(B, func(i, j int) bool {
		return B[i] < B[j]
	})

	m1 := make(map[int][]int)
	m2 := make(map[int]bool)

	var front, tail int
	for i := 0; i < len(B); i++ {
		for tail < len(A) && A[tail] <= B[i] {
			tail++
		}

		if tail == len(A) {
			for m2[front] {
				front++
			}
			m1[B[i]] = append(m1[B[i]], A[front])
			m2[front] = true
			continue
		}

		m1[B[i]] = append(m1[B[i]], A[tail])
		m2[tail] = true
		tail++
	}

	ans := make([]int, len(A))
	for i, b := range cloneB {
		ans[i] = m1[b][0]
		m1[b] = m1[b][1:]
	}
	return ans
}
