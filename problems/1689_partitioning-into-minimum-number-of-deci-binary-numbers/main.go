package main

func minPartitions(n string) int {
	bs := []byte(n)
	buildHeap(bs)
	return int(bs[0] - '0')
}

func buildHeap(bs []byte) {
	for mid := len(bs)/2 - 1; mid >= 0; mid-- {
		left := mid*2 + 1
		right := (mid + 1) * 2

		if bs[left] > bs[mid] {
			bs[left], bs[mid] = bs[mid], bs[left]
		}
		if right < len(bs) && bs[right] > bs[mid] {
			bs[right], bs[mid] = bs[mid], bs[right]
		}
	}
}
