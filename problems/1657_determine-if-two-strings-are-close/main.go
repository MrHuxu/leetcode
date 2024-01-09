// +build 215_1

package main

func closeStrings(word1 string, word2 string) bool {
	if len(word1) != len(word2) {
		return false
	}

	letterCnt1 := make(map[byte]int)
	letterCnt2 := make(map[byte]int)
	for i := 0; i < len(word1); i++ {
		letterCnt1[word1[i]]++
		letterCnt2[word2[i]]++
	}
	if len(word1) != len(word2) {
		return false
	}

	for b := range letterCnt1 {
		if _, ok := letterCnt2[b]; !ok {
			return false
		}
	}

	cnt1 := make(map[int]int)
	cnt2 := make(map[int]int)
	for _, cnt := range letterCnt1 {
		cnt1[cnt]++
	}
	for _, cnt := range letterCnt2 {
		cnt2[cnt]++
	}
	for k, v := range cnt1 {
		if cnt2[k] != v {
			return false
		}
	}

	return true
}

func main() {
	println(closeStrings("bca", "abc"))
	println(closeStrings("a", "aa"))
	println(closeStrings("cabbba", "abbccc"))
	println(closeStrings("cabbba", "aabbss"))
}
