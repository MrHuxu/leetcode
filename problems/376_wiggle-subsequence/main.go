package main

func wiggleMaxLength(nums []int) int {
	ret := 1

	cnt := make([][]int, len(nums))
	cnt[0] = []int{1, 1}
	for i := 1; i < len(nums); i++ {
		cnt[i] = []int{1, 1}
		for j := i - 1; j >= 0; j-- {
			switch {
			case nums[i] == nums[j]:
				continue

			case nums[i] > nums[j]:
				cnt[i][1] = max(cnt[i][1], cnt[j][0]+1)

			default:
				cnt[i][0] = max(cnt[i][0], cnt[j][1]+1)
			}
		}

		ret = max(ret, cnt[i][0])
		ret = max(ret, cnt[i][1])
	}

	return ret
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	println(wiggleMaxLength([]int{1, 7, 4, 9, 2, 5}))
	println(wiggleMaxLength([]int{1, 17, 5, 10, 13, 15, 10, 5, 16, 8}))
	println(wiggleMaxLength([]int{1, 2, 3, 4, 5, 6, 7, 8, 9}))
}
