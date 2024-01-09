// +build 213_1

package main

func countVowelStrings(n int) int {
	arr := []int{1, 1, 1, 1, 1}
	for i := 1; i < n; i++ {
		for j := 1; j < 5; j++ {
			arr[j] += arr[j-1]
		}
	}

	return arr[0] + arr[1] + arr[2] + arr[3] + arr[4]
}

func main() {
	println(countVowelStrings(1))
	println(countVowelStrings(2))
	println(countVowelStrings(33))
}
