package main

func isIdealPermutation(A []int) bool {
	var global, local int
	for i := 0; i < len(A)-1; i++ {
		if A[i] > A[i+1] {
			local++
		}

		for j := i + 1; j < len(A); j++ {
			if A[i] > A[j] {
				global++
			}
		}
	}

	return global == local
}
