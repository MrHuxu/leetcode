package main

import (
	"fmt"
	"testing"
)

func compress(chars []byte) int {
	idx, ch, cnt := 0, chars[0], 1
	for i := 1; i < len(chars); i++ {
		if chars[i] == ch {
			cnt++
			continue
		}

		chars[idx] = ch
		ch = chars[i]
		idx++
		if cnt == 1 {
			continue
		}

		for _, c := range convNumToChars(cnt) {
			chars[idx] = c
			idx++
		}
		cnt = 1
	}
	chars[idx] = ch
	idx++
	if cnt > 1 {
		for _, c := range convNumToChars(cnt) {
			chars[idx] = c
			idx++
		}
	}

	return idx
}

func convNumToChars(num int) []byte {
	if num < 10 {
		return []byte{byte(num + int('0'))}
	}
	return append(convNumToChars(num/10), byte(num%10+int('0')))
}

func Test443(t *testing.T) {
	arr1 := []byte{'a', 'a', 'b', 'b', 'c', 'c', 'c'}
	fmt.Println(compress(arr1))
	fmt.Println(string(arr1))

	arr2 := []byte{'a'}
	fmt.Println(compress(arr2))
	fmt.Println(string(arr2))

	arr3 := []byte{'a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'}
	fmt.Println(compress(arr3))
	fmt.Println(string(arr3))
	t.Error()
}

/*

Example 1:

Input: chars = ["a","a","b","b","c","c","c"]
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
Example 2:

Input: chars = ["a"]
Output: Return 1, and the first character of the input array should be: ["a"]
Explanation: The only group is "a", which remains uncompressed since it's a single character.
Example 3:

Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".


*/
