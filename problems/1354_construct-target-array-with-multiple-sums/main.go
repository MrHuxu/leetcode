package main

func isPossible(target []int) bool {
	if len(target) == 1 {
		return target[0] == 1
	}

	var max, maxIdx, sum int
	all1 := true
	for i, num := range target {
		if num != 1 && all1 {
			all1 = false
		}

		if num > max {
			max = num
			maxIdx = i
		}
		sum += num
	}

	if all1 {
		return true
	}

	if sum-max == len(target)-1 && (max-1)%(sum-max) == 0 {
		return true
	}

	if max <= (sum-max) || max%(sum-max) == 0 {
		return false
	}

	target[maxIdx] = max % (sum - max)
	return isPossible(target)
}
