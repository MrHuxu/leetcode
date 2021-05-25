// +build 207_0

package main

import (
	"strings"
)

func reorderSpaces(text string) string {
	var spaceCnt int
	var words []string
	var start int
	var hasWord bool
	for i, r := range text {
		if r == ' ' {
			if hasWord {
				words = append(words, text[start:i])
				hasWord = false
			}

			spaceCnt++
			continue
		}

		if i == 0 || text[i-1] == ' ' {
			hasWord = true
			start = i
		}
	}
	if hasWord {
		words = append(words, text[start:len(text)])
	}

	var result string
	if len(words) > 1 {
		var div string
		for i := 0; i < spaceCnt/(len(words)-1); i++ {
			div += " "
		}
		result = strings.Join(words, div)
		for i := 0; i < spaceCnt%(len(words)-1); i++ {
			result += " "
		}
	} else {
		result = words[0]
		for i := 0; i < spaceCnt; i++ {
			result += " "
		}
	}

	return result
}

func main() {
	// println(reorderSpaces("  this   is  a sentence "))
	// println(reorderSpaces(" practice   makes   perfect"))
	println(reorderSpaces("  this   is  a sentence "))
	println(reorderSpaces("  hello"))
}
