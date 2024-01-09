package main

func searchRange(nums []int, target int) []int {
	ll, lr := 0, len(nums)-1
	for ll <= lr {
		lm := (ll + lr) / 2
		if nums[lm] < target {
			ll = lm + 1
		} else {
			lr = lm - 1
		}
	}
	rl, rr := 0, len(nums)-1
	for rl <= rr {
		rm := (rl + rr) / 2
		if nums[rm] > target {
			rr = rm - 1
		} else {
			rl = rm + 1
		}
	}
	if ll > rr {
		return []int{-1, -1}
	}
	return []int{ll, rr}
}
