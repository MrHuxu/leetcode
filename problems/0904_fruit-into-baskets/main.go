package main

import (
	"fmt"
	"testing"
)

func totalFruit(fruits []int) int {
	var res int

	cnt := make(map[int]int)
	var left int
	for i, fruit := range fruits {
		cnt[fruit]++
		for len(cnt) > 2 {
			cnt[fruits[left]]--
			if cnt[fruits[left]] == 0 {
				delete(cnt, fruits[left])
			}
			left++
		}

		if cnt := i - left + 1; cnt > res {
			res = cnt
		}
	}

	return res
}

func Test904(t *testing.T) {
	fmt.Println(totalFruit([]int{1, 2, 1}))       // 3
	fmt.Println(totalFruit([]int{0, 1, 2, 2}))    // 3
	fmt.Println(totalFruit([]int{1, 2, 3, 2, 2})) //4
	t.Error()
}
