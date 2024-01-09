package main

func countBalls(lowLimit int, highLimit int) int {
	var max int
	count := make(map[int]int)

	for i := lowLimit; i <= highLimit; i++ {
		var sum int
		tmp := i
		for tmp != 0 {
			sum += tmp % 10
			tmp /= 10
		}

		count[sum]++
		if count[sum] > max {
			max = count[sum]
		}
	}

	return max
}

func main() {
	println(countBalls(1, 10))
	println(countBalls(5, 15))
	println(countBalls(19, 28))
}
