// +build 215_0

package main

import (
	"fmt"
	"math"
)

type OrderedStream struct {
	ptr          int
	mapIDToValue map[int]string
}

func Constructor(n int) OrderedStream {
	return OrderedStream{
		ptr:          1,
		mapIDToValue: make(map[int]string),
	}
}

func (this *OrderedStream) Insert(id int, value string) []string {
	this.mapIDToValue[id] = value

	var result []string
	if id == this.ptr {
		var j int
		for j = id; j <= math.MaxInt32; j++ {
			if value, ok := this.mapIDToValue[j]; ok {
				result = append(result, value)
			} else {
				break
			}
		}
		this.ptr = j
	}

	return result
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * obj := Constructor(n);
 * param_1 := obj.Insert(id,value);
 */

func main() {
	os := Constructor(5)
	fmt.Println(os.Insert(3, "ccccc"))
	fmt.Println(os.Insert(1, "aaaaa"))
	fmt.Println(os.Insert(2, "bbbbb"))
	fmt.Println(os.Insert(5, "eeeee"))
	fmt.Println(os.Insert(4, "ddddd"))
}
