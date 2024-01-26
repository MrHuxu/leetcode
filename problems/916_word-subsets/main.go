package main

func wordSubsets(A []string, B []string) []string {
	cntB := make(map[rune]int)
	for _, b := range B {
		tmp := make(map[rune]int)
		for _, r := range b {
			tmp[r]++
		}

		for r, cnt := range tmp {
			if cntB[r] < cnt {
				cntB[r] = cnt
			}
		}
	}

	var ans []string
	for _, a := range A {
		allSubset := true

		tmp := make(map[rune]int)
		for _, r := range a {
			tmp[r]++
		}

		for r, cnt := range cntB {
			if tmp[r] < cnt {
				allSubset = false
				break
			}
		}

		if allSubset {
			ans = append(ans, a)
		}
	}
	return ans
}
