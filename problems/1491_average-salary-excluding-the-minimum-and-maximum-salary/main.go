package main

func average(salary []int) float64 {
	min, max, sum := salary[0], salary[0], 0
	for _, s := range salary {
		sum += s
		if s < min {
			min = s
		}
		if s > max {
			max = s
		}
	}
	return float64(sum-min-max) / float64(len(salary)-2)
}
