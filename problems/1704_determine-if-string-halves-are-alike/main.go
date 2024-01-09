package main

var m = map[byte]bool{
	'a': true,
	'A': true,
	'e': true,
	'E': true,
	'i': true,
	'I': true,
	'o': true,
	'O': true,
	'u': true,
	'U': true,
}

func halvesAreAlike(s string) bool {
	var cnt1, cnt2 int

	for i := 0; i < len(s)/2; i++ {
		j := len(s)/2 + i

		if m[s[i]] {
			cnt1++
		}
		if m[s[j]] {
			cnt2++
		}
	}

	return cnt1 == cnt2
}
