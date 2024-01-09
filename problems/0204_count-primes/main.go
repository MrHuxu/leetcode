package main

func countPrimes(n int) int {
	if n <= 2 {
		return 0
	}

	var ans int
	arr := make([]int, n)
	for i := 2; i < n; i++ {
		if arr[i] == 0 {
			ans++

			for j := i; j < n; j += i {
				arr[j]++
			}
		}
	}
	return ans
}
