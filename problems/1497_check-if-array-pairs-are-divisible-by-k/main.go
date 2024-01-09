// +build 195_1

package main

func canArrange(arr []int, k int) bool {
	modCnt := make(map[int]int)

	for _, num := range arr {
		mod := num % k
		if modCnt[k-mod] > 0 {
			modCnt[k-mod]--
		} else if modCnt[-k-mod] > 0 {
			modCnt[-k-mod]--
		} else if modCnt[-mod] > 0 {
			modCnt[-mod]--
		} else {
			modCnt[mod]++
		}
	}

	if modCnt[0]%2 != 0 {
		return false
	}

	for mod, cnt := range modCnt {
		if mod != 0 && cnt > 0 {
			return false
		}
	}

	return true
}

func main() {
	println(canArrange([]int{1, 2, 3, 4, 5, 10, 6, 7, 8, 9}, 5))
	println(canArrange([]int{1, 2, 3, 4, 5, 6}, 7))
	println(canArrange([]int{-10, 10}, 2))
	println(canArrange([]int{1, 2, 3, 4, 5, 6}, 10))
	println(canArrange([]int{-1, 1, -2, 2, -3, 3, -4, 4}, 3))
	println(canArrange([]int{-4, -7, 5, 2, 9, 1, 10, 4, -8, -3}, 3))
}
