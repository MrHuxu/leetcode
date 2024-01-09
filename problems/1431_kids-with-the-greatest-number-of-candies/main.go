package main

func kidsWithCandies(candies []int, extraCandies int) []bool {
    var maxCandies int
    for _, candy := range candies {
        if candy > maxCandies {
            maxCandies = candy
        }
    }
    ret := make([]bool, len(candies))
    for i, candy := range candies {
        ret[i] = candy + extraCandies >= maxCandies
    }
    return ret
}