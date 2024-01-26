package main

func candy(ratings []int) int {
	var ret int

	candies := make([]int, len(ratings))
	for i := range ratings {
		if i > 0 && ratings[i] > ratings[i-1] {
			candies[i] = candies[i-1] + 1
			ret += candies[i]
			continue
		}

		candies[i] = 1
		ret++
	}
	for i := len(ratings) - 2; i >= 0; i-- {
		if ratings[i] > ratings[i+1] && candies[i] <= candies[i+1] {
			ret += candies[i+1] + 1 - candies[i]
			candies[i] = candies[i+1] + 1
		}
	}

	return ret
}

func main() {
	println(candy([]int{1, 0, 2}))
	println(candy([]int{1, 2, 2}))
	println(candy([]int{1, 2, 87, 87, 87, 2, 1})) // 1, 2, 3, 1, 3, 2, 1
}
