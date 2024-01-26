package main

import "sort"

func makesquare(matchsticks []int) bool {
	var sum, max int
	for _, matchstick := range matchsticks {
		sum += matchstick
		if matchstick > max {
			max = matchstick
		}
	}
	if sum%4 != 0 {
		return false
	}
	if max > sum/4 {
		return false
	}

	sort.Slice(matchsticks, func(i, j int) bool {
		return matchsticks[i] < matchsticks[j]
	})

	l, r := 0, len(matchsticks)-1
	for i := 1; i < 4; i++ {
		left := sum / 4
		for left != 0 {
			if left >= matchsticks[r] {
				left -= matchsticks[r]
				r--
			} else if left >= matchsticks[l] {
				left -= matchsticks[l]
				l++
			} else {
				return false
			}
		}
	}

	return true
}
