// +build 214_1

package main

func minDeletions(s string) int {
	mapChToFreq := make(map[rune]int)
	for _, r := range s {
		mapChToFreq[r]++
	}

	var maxFreq int
	mapFreqToCnt := make(map[int]int)
	for _, freq := range mapChToFreq {
		mapFreqToCnt[freq]++
		maxFreq = max(freq, maxFreq)
	}

	var result int
	for freq := maxFreq; freq > 0; freq-- {
		if mapFreqToCnt[freq] > 1 {
			mapFreqToCnt[freq-1] += mapFreqToCnt[freq] - 1
			result += mapFreqToCnt[freq] - 1
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
	println(minDeletions("aab"))      // 0
	println(minDeletions("aaabbbcc")) // 2
	println(minDeletions("ceabaacb")) // 2
	println(minDeletions("abcabc"))   // 3
}
