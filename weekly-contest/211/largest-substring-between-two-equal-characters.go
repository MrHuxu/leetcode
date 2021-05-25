// +build 211_0

package main

func maxLengthBetweenEqualCharacters(s string) int {
	result := -1

	for i := 0; i < len(s)-1; i++ {
		for j := i + 1; j < len(s); j++ {
			if s[i] == s[j] {
				result = max(result, j-i-1)
			}
		}
	}

	return result
}

func max(a, b int) int {
	if a > b {
		return a
	}

	return b
}

func main() {
	println(maxLengthBetweenEqualCharacters("aa"))
	println(maxLengthBetweenEqualCharacters("abca"))
	println(maxLengthBetweenEqualCharacters("cbzxy"))
	println(maxLengthBetweenEqualCharacters("cabbac"))
}
