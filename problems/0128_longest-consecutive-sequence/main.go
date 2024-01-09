package main

func longestConsecutive(nums []int) int {
	m1 := make(map[int]int)
	m2 := make(map[int]int)

	var ans int
	for _, num := range nums {
		head, tail := num, num

		if tmp, ok := m1[num+1]; ok {
			tail = tmp
		}

		if tmp, ok := m2[num-1]; ok {
			head = tmp
		}

		if tmp, ok := m1[head]; !ok || tail > tmp {
			m1[head] = tail
		}
		if tmp, ok := m2[tail]; !ok || head < tmp {
			m2[tail] = head
		}
		ans = max(ans, tail-head+1)
	}

	return ans
}

func max(a, b int) int {
	if a > b {
		return a
	}

	return b
}
