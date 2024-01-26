package main

func powerfulIntegers(x int, y int, bound int) []int {
	powX := []int{1}
	for x != 1 {
		next := powX[len(powX)-1] * x
		if next >= bound {
			break
		}
		powX = append(powX, next)
	}
	powY := []int{1}
	for y != 1 {
		next := powY[len(powY)-1] * y
		if next >= bound {
			break
		}
		powY = append(powY, next)
	}

	var ans []int
	used := make(map[int]bool)
	for _, numx := range powX {
		for _, numy := range powY {
			if num := numx + numy; num <= bound {
				if !used[num] {
					ans = append(ans, num)
					used[num] = true
				}
			} else {
				break
			}
		}
	}

	return ans
}
