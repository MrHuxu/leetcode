// +build integerReplacement

package main

import "fmt"

func integerReplacement(n int) int {
	if n <= 3 {
		return n - 1
	} else {
		if n%2 == 0 {
			return integerReplacement(n/2) + 1
		} else {
			sub1 := integerReplacement(n - 1)
			plus1 := integerReplacement(n + 1)
			if sub1 > plus1 {
				return plus1 + 1
			} else {
				return sub1 + 1
			}
		}
	}
}

func main() {
	fmt.Println(integerReplacement(1))
	fmt.Println(integerReplacement(2))
	fmt.Println(integerReplacement(3))
	fmt.Println(integerReplacement(4))
	fmt.Println(integerReplacement(7))
	fmt.Println(integerReplacement(8))
}
