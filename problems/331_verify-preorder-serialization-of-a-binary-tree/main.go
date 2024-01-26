package main

import (
	"strings"
)

func isValidSerialization(preorder string) bool {
	var stack []string
	for _, str := range strings.Split(preorder, ",") {
		if str != "#" {
			stack = append(stack, str)
			continue
		}

		if len(stack) == 0 || stack[len(stack)-1] != "#" {
			stack = append(stack, str)
			continue
		}

		stack = append(stack, "#")
		for len(stack) >= 3 && stack[len(stack)-1] == "#" && stack[len(stack)-2] == "#" && stack[len(stack)-3] != "#" {
			stack = append(stack[:len(stack)-3], "#")
		}
	}

	return len(stack) == 1 && stack[0] == "#"
}
