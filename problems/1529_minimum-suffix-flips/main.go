// +build 199_1

package main

func minFlips(target string) int {
	var result int

	pre := '0'
	for _, b := range target {
		if b != pre {
			result++
			pre = b
		}
	}

	return result
}

func main() {
	println(minFlips("10111"))
	println(minFlips("101"))
	println(minFlips("00000"))
	println(minFlips("001011101"))
}
