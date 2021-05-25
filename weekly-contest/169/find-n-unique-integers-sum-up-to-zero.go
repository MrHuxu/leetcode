//+build sumZero

package main

import "fmt"

func sumZero(n int) []int {
	var result []int

	if n%2 == 1 {
		result = append(result, 0)
	}

	for i := 1; i <= n/2; i++ {
		result = append(result, i, -i)
	}

	return result
}

func main() {
	fmt.Println(sumZero(6))
	fmt.Println(sumZero(5))
	fmt.Println(sumZero(3))
	fmt.Println(sumZero(1))
}
