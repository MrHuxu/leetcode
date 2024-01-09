package main

import (
	"strings"
)

func findDuplicate(paths []string) [][]string {
	mapContentToFiles := make(map[string][]string)
	for _, path := range paths {
		arr := strings.Split(path, " ")
		dir := arr[0]

		for i := 1; i < len(arr); i++ {
			arr2 := strings.Split(arr[i], "(")
			file := arr2[0]
			content := arr2[1][:len(arr2[1])-1]

			mapContentToFiles[content] = append(mapContentToFiles[content], dir+"/"+file)
		}
	}

	var ans [][]string
	for _, files := range mapContentToFiles {
		if len(files) > 1 {
			ans = append(ans, files)
		}
	}
	return ans
}
