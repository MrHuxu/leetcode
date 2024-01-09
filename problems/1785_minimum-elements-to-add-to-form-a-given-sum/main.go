package main

func minElements(nums []int, limit int, goal int) int {
	var sum int
	for _, num := range nums {
		sum += num
	}

	sub := goal - sum
	if sub <= 0 {
		sub = -sub
	}

	if sub%limit != 0 {
		return sub/limit + 1
	}

	return sub / limit
}

func main() {
	println(minElements([]int{1, -1, 1}, 3, -4))
	println(minElements([]int{1, -10, 9, 1}, 100, 0))
}
