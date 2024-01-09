package main

func isPowerOfThree(n int) bool {
	if n <= 1 {
		return n == 1
	}

	for {
		if n < 3 {
			break
		}

		if n%3 != 0 {
			return false
		}

		start := 3
		for n >= start && n%start == 0 {
			n /= start
			start *= start
		}
	}

	return n == 1
}
