package main

func maxScore(cardPoints []int, k int) int {
	var sum, kSubSum int
	for i, point := range cardPoints {
		sum += point
		if i < len(cardPoints)-k {
			kSubSum += point
		}
	}

	minSubSum := kSubSum
	for i := 1; i <= k; i++ {
		kSubSum -= cardPoints[i-1] - cardPoints[i+(len(cardPoints)-k)-1]
		minSubSum = min(minSubSum, kSubSum)
	}
	return sum - minSubSum
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
