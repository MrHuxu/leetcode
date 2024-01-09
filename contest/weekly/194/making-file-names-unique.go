// +build 194_1

package main

import (
	"fmt"
	"strconv"
)

func getFolderNames(names []string) []string {
	m := make(map[string]int)
	for i, name := range names {
		if cnt, ok := m[name]; ok {
			for j := cnt; j < len(names); j++ {
				tmp := name + "(" + strconv.Itoa(j) + ")"
				if _, ok := m[tmp]; !ok {
					names[i] = tmp
					m[tmp]++
					break
				}
			}
		}
		m[name]++
	}
	return names
}

func main() {
	fmt.Println(getFolderNames([]string{"pes", "fifa", "gta", "pes(2019)"}))
	fmt.Println(getFolderNames([]string{"gta", "gta(1)", "gta", "avalon"}))
	fmt.Println(getFolderNames([]string{"onepiece", "onepiece(1)", "onepiece(2)", "onepiece(3)", "onepiece"}))
	fmt.Println(getFolderNames([]string{"wano", "wano", "wano", "wano"}))
	fmt.Println(getFolderNames([]string{"kaido", "kaido(1)", "kaido", "kaido(1)"}))
	fmt.Println(getFolderNames([]string{"kaido", "kaido(1)", "kaido", "kaido(1)", "kaido(2)"}))
}
