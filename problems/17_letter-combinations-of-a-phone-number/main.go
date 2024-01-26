package main

var mapNumberToLetters = map[byte][]byte{
	'2': {'a', 'b', 'c'},
	'3': {'d', 'e', 'f'},
	'4': {'g', 'h', 'i'},
	'5': {'j', 'k', 'l'},
	'6': {'m', 'n', 'o'},
	'7': {'p', 'q', 'r', 's'},
	'8': {'t', 'u', 'v'},
	'9': {'w', 'x', 'y', 'z'},
}

func letterCombinations(digits string) []string {
	var ans []string
	var dfs func(int, []byte)
	dfs = func(idx int, arr []byte) {
		if idx == len(digits) {
			if len(arr) > 0 {
				ans = append(ans, string(arr))
			}

			return
		}

		for _, letter := range mapNumberToLetters[digits[idx]] {
			dfs(idx+1, append(arr, letter))
		}
	}
	dfs(0, nil)
	return ans
}
