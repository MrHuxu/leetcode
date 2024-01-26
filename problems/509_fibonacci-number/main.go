package main

func fib(n int) int {
	if n < 2 {
		return n
	}

	a, b := 0, 1
	for i := 1; i <= n; i++ {
		a, b = b, a+b
	}

	return a
}
