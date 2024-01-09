package main 

func numPrimeArrangements(n int) int {
	arr := make([]int, n + 1)
	for i := 2; i <= n; i++ {
		for j := i; j <= n; j += i {
			arr[j]++
		}
	}

	var primeCnt int
	for i := 2; i <= n; i++ {
		if arr[i] == 1 {
			primeCnt++
		}
	}

	primeFact := int64(1)
	normalFact := int64(1)
	for i := 1; i <= primeCnt; i++ {
		primeFact = (primeFact * int64(i)) % int64(1000000007)
	}
	for i := 1; i <= (n - primeCnt); i++ {
		normalFact = (normalFact * int64(i)) % int64(1000000007)
	}
	return int(primeFact * normalFact % int64(1000000007))
}

func main() {
	println(numPrimeArrangements(5))
	println(numPrimeArrangements(100))
}