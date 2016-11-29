// +build 406

package main

import (
	"fmt"
	"sort"
)

type People [][]int

func (p People) Len() int {
	return len(p)
}

func (p People) Swap(i, j int) {
	p[i], p[j] = p[j], p[i]
}

func (p People) Less(i, j int) bool {
	if p[i][0] == p[j][0] {
		return p[i][1] < p[j][1]
	} else {
		return p[i][0] > p[j][0]
	}
}

func reconstructQueue(people [][]int) [][]int {
	p := People(people)
	sort.Sort(p)

	var result, tail [][]int
	for _, person := range p {
		tail = append([][]int{}, result[person[1]:]...)
		result = append(result[0:person[1]], person)
		result = append(result, tail...)
	}

	return result
}

func main() {
	people := [][]int{[]int{7, 0}, []int{4, 4}, []int{7, 1}, []int{5, 0}, []int{6, 1}, []int{5, 2}}
	fmt.Println(reconstructQueue(people))
}
