package main

import (
	"sort"
)

func customSortString(order string, str string) string {
	byteOrder := make(map[byte]int)
	for i := range order {
		byteOrder[order[i]] = i
	}

	bytes := []byte(str)
	sort.Slice(bytes, func(i, j int) bool {
		oi, oki := byteOrder[bytes[i]]
		oj, okj := byteOrder[bytes[j]]

		switch {
		case !oki && okj:
			return false

		case oki && !okj, !oki && !okj:
			return true

		default:
			return oi < oj
		}
	})

	return string(bytes)
}
