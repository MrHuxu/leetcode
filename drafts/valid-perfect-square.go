// +build isPerfectSquare

package main

import "fmt"

func isPerfectSquare(num int) bool {
	head := 1
	tail := num
	flag := false

	for head < tail {
		mid := (head + tail) / 2

		if mid*mid < num {
			head = mid + 1
		} else if mid*mid > num {
			tail = mid - 1
		} else {
			flag = true
			break
		}
	}

	return flag || head*head == num
}

func main() {
	fmt.Println(isPerfectSquare(1))
	fmt.Println(isPerfectSquare(4))
	fmt.Println(isPerfectSquare(5))
	fmt.Println(isPerfectSquare(9))
}
