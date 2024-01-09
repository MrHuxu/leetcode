package main

import (
	"fmt"
)

func corpFlightBookings(bookings [][]int, n int) []int {
	result := make([]int, n+1)

	for _, booking := range bookings {
		result[booking[0]-1] += booking[2]
		result[booking[1]] -= booking[2]
	}

	for i := 1; i < n; i++ {
		result[i] += result[i-1]
	}

	return result[0:n]
}

func main() {
	fmt.Println(corpFlightBookings(
		[][]int{
			[]int{1, 2, 10},
			[]int{2, 3, 20},
			[]int{2, 5, 25},
		}, 5,
	))
}
