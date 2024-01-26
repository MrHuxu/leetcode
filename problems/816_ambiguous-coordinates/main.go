package main

func ambiguousCoordinates(s string) []string {
	nums := s[1 : len(s)-1]

	var ans []string
	for i := 1; i < len(nums); i++ {
		left := getValidNums(nums[:i])
		right := getValidNums(nums[i:])

		for _, l := range left {
			for _, r := range right {
				ans = append(ans, "("+l+", "+r+")")
			}
		}
	}
	return ans
}

func getValidNums(s string) []string {
	switch {
	case s[0] == '0' && s[len(s)-1] == '0' && len(s) > 1:
		return nil

	case s[len(s)-1] == '0', len(s) == 1:
		return []string{s}

	case s[0] == '0':
		return []string{"0." + s[1:]}

	default:
		ret := []string{s}
		for i := 1; i < len(s); i++ {
			ret = append(ret, s[:i]+"."+s[i:])
		}
		return ret
	}
}
