package main

import (
	"fmt"
	"testing"
)

func addDigits(num int) int {
	if num < 10 {
		return num
	}
	var sum int
	for num > 0 {
		sum += num % 10
		num /= 10
	}
	return addDigits(sum)
}

func Test258(t *testing.T) {
	fmt.Println(addDigits(38))
	t.Error()
}
