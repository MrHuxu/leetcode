package main

func furthestBuilding(heights []int, bricks int, ladders int) int {
	var gaps []int

	for i := 0; i < len(heights)-1; i++ {
		if heights[i] >= heights[i+1] {
			continue
		}

		bricks -= heights[i+1] - heights[i]
		gaps = append(gaps, heights[i+1]-heights[i])
		if bricks < 0 {
			buildHeap(gaps)
			bricks += gaps[0]
			gaps = gaps[1:]

			if ladders > 0 {
				ladders--
			} else {
				return i
			}
		}
	}

	return len(heights) - 1
}

func buildHeap(arr []int) {
	for i := len(arr)/2 - 1; i >= 0; i-- {
		left := i*2 + 1
		right := (i + 1) * 2

		if right < len(arr) && arr[right] > arr[i] {
			arr[i], arr[right] = arr[right], arr[i]
		}
		if arr[left] > arr[i] {
			arr[i], arr[left] = arr[left], arr[i]
		}
	}
}

func main() {
	println(furthestBuilding([]int{4, 2, 7, 6, 9, 14, 12}, 5, 1))
	println(furthestBuilding([]int{4, 12, 2, 7, 3, 18, 20, 3, 19}, 10, 2))
}
