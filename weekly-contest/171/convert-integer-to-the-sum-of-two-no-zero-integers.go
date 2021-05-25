// +build 1711

package main

import "fmt"

func getNoZeroIntegers(n int) []int {
	for i := 1; i <= n/2; i++ {
		if validate(i) && validate(n-i) {
			return []int{i, n - i}
		}
	}

	return nil
}

func validate(n int) bool {
	for n > 0 {
		if n%10 == 0 {
			return false
		}
		n /= 10
	}
	return true
}

func main() {
	fmt.Println(getNoZeroIntegers(2))
	fmt.Println(getNoZeroIntegers(10000))
	fmt.Println(getNoZeroIntegers(69))
	fmt.Println(getNoZeroIntegers(1010))
}
