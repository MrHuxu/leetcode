// +build canReach

package main

func canReach(arr []int, start int) bool {
	var dfs func(int, []bool) bool
	dfs = func(idx int, used []bool) bool {
		if arr[idx] == 0 {
			return true
		}

		idx1 := idx - arr[idx]
		idx2 := idx + arr[idx]

		var found bool

		if idx1 >= 0 && idx1 < len(arr) && !used[idx1] {
			used[idx1] = true
			found = dfs(idx1, used)
			used[idx1] = false
		}

		if !found && (idx2 >= 0 && idx2 < len(arr) && !used[idx2]) {
			used[idx2] = true
			found = dfs(idx2, used)
			used[idx2] = false
		}

		return found
	}

	used := make([]bool, len(arr))
	used[start] = true
	return dfs(start, used)
}

func main() {
	println(canReach([]int{4, 2, 3, 0, 3, 1, 2}, 5))
	println(canReach([]int{4, 2, 3, 0, 3, 1, 2}, 0))
	println(canReach([]int{3, 0, 2, 1, 2}, 2))
}
