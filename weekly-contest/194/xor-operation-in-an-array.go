// +build 194_0

package main

func xorOperation(n int, start int) int {
	result := start
	for i := 1; i < n; i++ {
		result ^= start + i * 2
	}
	return result
}

func main() {
	println(xorOperation(5, 0))
	println(xorOperation(4, 3))
	println(xorOperation(1, 7))
}