package main

import (
	"math"
	"strconv"
)

func superpalindromesInRange(left string, right string) int {
	leftNum, _ := strconv.ParseInt(left, 10, 64)
	leftRoot := int64(math.Ceil(math.Sqrt(float64(leftNum))))
	rightNum, _ := strconv.ParseInt(right, 10, 64)
	rightRoot := int64(math.Sqrt(float64(rightNum)))

	var ans int
	ans += traverse("", strconv.FormatInt(leftRoot, 10), strconv.FormatInt(rightRoot, 10))
	for i := 0; i <= 9; i++ {
		ans += traverse(strconv.Itoa(i), strconv.FormatInt(leftRoot, 10), strconv.FormatInt(rightRoot, 10))
	}

	return ans
}

func traverse(s string, left, right string) int {
	nums, _ := strconv.ParseInt(s, 10, 64)
	numl, _ := strconv.ParseInt(left, 10, 64)
	numr, _ := strconv.ParseInt(right, 10, 64)

	var ret int
	if s != "" {
		num, _ := strconv.ParseInt(s, 10, 64)
		if nums >= numl && nums <= numr && isPalimdromic(num) && isPalimdromic(num*num) {
			ret++
		}
	}

	if nums < numr && len(s) <= len(right) {
		for i := 0; i <= 9; i++ {
			tmp := strconv.Itoa(i)
			ret += traverse(tmp+s+tmp, left, right)
		}
	}
	return ret
}

func isPalimdromic(num int64) bool {
	reversed := int64(0)
	tmp := num
	for tmp != 0 {
		reversed = reversed*10 + tmp%10
		tmp /= 10
	}
	return reversed == num
}
