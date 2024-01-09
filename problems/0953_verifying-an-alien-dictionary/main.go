package main

func isAlienSorted(words []string, order string) bool {
	letterOrder := make(map[byte]int)
	for i, letter := range order {
		letterOrder[byte(letter)] = i
	}

	for i := 0; i < len(words)-1; i++ {
		if words[i] == words[i+1] {
			continue
		}

		var valid bool
		for j := 0; j < len(words[i]) && j < len(words[i+1]); j++ {
			if letterOrder[words[i][j]] > letterOrder[words[i+1][j]] {
				return false
			} else if letterOrder[words[i][j]] < letterOrder[words[i+1][j]] {
				valid = true
				break
			}
		}

		if valid {
			continue
		}

		if len(words[i+1]) < len(words[i]) {
			return false
		}
	}
	return true
}
