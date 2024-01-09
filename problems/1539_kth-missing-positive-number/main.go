package main

import "math"

func findKthPositive(arr []int, k int) int {
    nums := make(map[int]bool)
    for _, num := range arr {
        nums[num] = true
    }
    for i := 1; i <= math.MaxInt; i++ {
        if !nums[i] {
            k--
        }
        if k == 0 {
            return i
        }
    }
    return 0
}