// +199_0

package main

func restoreString(s string, indices []int) string {
	result := make([]byte, len(indices))
	for i, index := range indices {
		result[index] = s[i]
	}

	return string(result)
}

func main() {
	println(restoreString("codeleet", []int{4, 5, 6, 7, 0, 2, 1, 3}))
}
