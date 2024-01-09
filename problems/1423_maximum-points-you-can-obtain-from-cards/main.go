// +build 186_1

package main

func maxScore(cardPoints []int, k int) int {
	if k == 0 {
		return 0
	}

	var leftSum, rightSum int
	for i := 0; i < k; i++ {
		leftSum += cardPoints[i]
	}

	result := leftSum
	for i := k - 1; i >= 0; i-- {
		leftSum -= cardPoints[i]
		rightSum += cardPoints[len(cardPoints)-(k-i)]
		result = max(result, leftSum+rightSum)
	}

	return result
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	println(maxScore([]int{1, 2, 3, 4, 5, 6, 1}, 3))
	println(maxScore([]int{1, 2, 3, 4, 5, 6, 1}, 7))
	println(maxScore([]int{1, 2, 3, 4, 5, 6, 1}, 1))
}
