package main

func countOdds(low int, high int) int {
    count := high - low + 1
    if count % 2 == 0 {
        return count / 2
    }
    return count / 2 + high % 2
}