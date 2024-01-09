package main

import (
	"fmt"
	"testing"
)

func numberOfArrays(s string, k int) int {
	n := len(s)
	dp := make([]int, n+1)
	for i := 1; i <= n; i++ {
		if s[i-1] == '0' || int(s[i-1]-'0') > k {
			continue
		}
		var num int
		for j := i; j <= n; j++ {
			num = num*10 + int(s[j-1]-'0')
			if num > k {
				break
			}
			dp[j] = (dp[j] + dp[i-1]) % 1000000007
			if i == 1 {
				dp[j] = (dp[j] + 1) % 1000000007
			}
		}
	}
	return dp[n]
}

func Test1416(t *testing.T) {
	fmt.Println(numberOfArrays("1000", 10000))
	fmt.Println(numberOfArrays("1000", 10))
	fmt.Println(numberOfArrays("1317", 2000))
	fmt.Println(numberOfArrays("12", 90))
	fmt.Println(numberOfArrays("1234", 90))
	fmt.Println(numberOfArrays("1234567890", 90))
	t.Error()
}

/*
Example 1:

Input: s = "1000", k = 10000
Output: 1
Explanation: The only possible array is [999]
Example 2:

Input: s = "1000", k = 10
Output: 0
Explanation: There cannot be an array that was printed this way and has all integer >= 1 and <= 10.
Example 3:

Input: s = "1317", k = 2000
Output: 8
Explanation: Possible arrays are [1317],[131,7],[13,17],[1,317],[13,1,7],[1,31,7],[1,3,17],[1,3,1,7]
*/
