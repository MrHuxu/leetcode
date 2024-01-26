package main

import (
	"strconv"
	"strings"
)

func complexNumberMultiply(num1 string, num2 string) string {
	var real1, imaginary1, real2, imaginary2 int

	arr1 := strings.Split(num1, "+")
	for arr1[0] == "" {
		arr1 = arr1[1:]
	}
	real1, _ = strconv.Atoi(arr1[0])
	imaginary1, _ = strconv.Atoi(arr1[1][:len(arr1[1])-1])

	arr2 := strings.Split(num2, "+")
	for arr2[0] == "" {
		arr2 = arr2[1:]
	}
	real2, _ = strconv.Atoi(arr2[0])
	imaginary2, _ = strconv.Atoi(arr2[1][:len(arr2[1])-1])

	newReal := real1*real2 - imaginary1*imaginary2
	newImaginary := real1*imaginary2 + real2*imaginary1

	return strconv.Itoa(newReal) + "+" + strconv.Itoa(newImaginary) + "i"
}
