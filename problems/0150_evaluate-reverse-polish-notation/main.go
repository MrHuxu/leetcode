package main

import "strconv"

func evalRPN(tokens []string) int {
	var stack []int
	for _, token := range tokens {
		switch token {
		case "+":
			stack = append(stack[:len(stack)-2], stack[len(stack)-2]+stack[len(stack)-1])

		case "-":
			stack = append(stack[:len(stack)-2], stack[len(stack)-2]-stack[len(stack)-1])

		case "*":
			stack = append(stack[:len(stack)-2], stack[len(stack)-2]*stack[len(stack)-1])

		case "/":
			stack = append(stack[:len(stack)-2], stack[len(stack)-2]/stack[len(stack)-1])

		default:
			num, _ := strconv.Atoi(token)
			stack = append(stack, num)
		}
	}
	return stack[0]
}
