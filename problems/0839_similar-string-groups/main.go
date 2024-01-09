package main

import (
	"fmt"
	"testing"
)

func numSimilarGroups(strs []string) int {
	var ret int
	used := make([]bool, len(strs))
	for i := range strs {
		if used[i] {
			continue
		}
		dfs(strs, used, i)
		ret++
	}
	return ret
}

func dfs(strs []string, used []bool, i int) {
	used[i] = true
	for j, str := range strs {
		if used[j] {
			continue
		}
		if isSimilar(strs[i], str) {
			dfs(strs, used, j)
		}
	}
}

func isSimilar(s1, s2 string) bool {
	var diffCnt, diffIdx int
	for i := 0; i < len(s1); i++ {
		if s1[i] != s2[i] {
			diffCnt++
			if diffCnt == 1 {
				diffIdx = i
				continue
			}
			if diffCnt == 2 {
				if s1[diffIdx] != s2[i] || s1[i] != s2[diffIdx] {
					return false
				}
			}
			if diffCnt > 2 {
				return false
			}
		}
	}
	return true
}

func Test839(t *testing.T) {
	fmt.Println(numSimilarGroups([]string{"tars", "rats", "arts", "star"}))
	fmt.Println(numSimilarGroups([]string{"omv", "ovm"}))
	fmt.Println(numSimilarGroups([]string{"kccomwcgcs", "socgcmcwkc", "sgckwcmcoc", "coswcmcgkc", "cowkccmsgc", "cosgmccwkc", "sgmkwcccoc", "coswmccgkc", "kowcccmsgc", "kgcomwcccs"}))
	t.Error()
}
