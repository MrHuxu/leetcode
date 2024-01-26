package main

import "sort"

func threeSumMulti(arr []int, target int) int {
	sort.Slice(arr, func(i, j int) bool {
		return arr[i] < arr[j]
	})

	var ans int
	for i := 0; i < len(arr)-2; i++ {
		j := i + 1
		k := len(arr) - 1
		for j < k {
			if arr[j] == arr[k] {
				if arr[i]+arr[j]+arr[k] == target {
					ans = (ans + (k-j+1)*(k-j)/2%1000000007) % 1000000007
				}
				break
			}

			switch {
			case arr[i]+arr[j]+arr[k] < target:
				for ; arr[j+1] == arr[j] && j < len(arr)-1; j++ {
				}
				j++

			case arr[i]+arr[j]+arr[k] > target:
				for ; arr[k-1] == arr[k] && k > j; k-- {
				}
				k--

			case arr[i]+arr[j]+arr[k] == target:
				nextj := j + 1
				for ; arr[nextj] == arr[j] && nextj < len(arr)-1; nextj++ {
				}
				nextk := k - 1
				for ; arr[nextk] == arr[k] && nextk > j; nextk-- {
				}
				ans = (ans + (nextj-j)*(k-nextk)%1000000007) % 1000000007
				j = nextj
				k = nextk
			}
		}
	}
	return ans
}
