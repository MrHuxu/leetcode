// +build 1712

package main

func minFlips(a int, b int, c int) int {
	var result int

	for c > 0 {
		switch c & 1 {
		case 1:
			if a&1 == 0 && b&1 == 0 {
				result++
			}

		case 0:
			result += a&1 + b&1
		}

		a = a >> 1
		b = b >> 1
		c = c >> 1
	}

	for a > 0 {
		result += a & 1
		a = a >> 1
	}
	for b > 0 {
		result += b & 1
		b = b >> 1
	}

	return result
}

func main() {
	println(minFlips(2, 6, 5))
	println(minFlips(4, 2, 7))
	println(minFlips(1, 2, 3))
	println(minFlips(8, 3, 5))
}
