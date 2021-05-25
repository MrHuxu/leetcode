package main

import (
	"fmt"
)

type LFUCache struct {
	Cap     int
	Data    map[int]*LFUNode
	Heap    []*LFUNode
	Counter int
}

type LFUNode struct {
	Key   int
	Value int
	Freq  int
	Count int
}

func Constructor(capacity int) LFUCache {
	return LFUCache{
		Cap:  capacity,
		Data: make(map[int]*LFUNode),
	}
}

func (this *LFUCache) Get(key int) int {
	this.Counter++

	node, ok := this.Data[key]
	if !ok {
		return -1
	}

	node.Freq++
	node.Count = this.Counter
	return node.Value
}

func (this *LFUCache) Put(key int, value int) {
	this.Counter++

	if this.Cap == 0 {
		return
	}

	if node, ok := this.Data[key]; ok {
		node.Value = value
		node.Freq++
		node.Count = this.Counter
		return
	}

	node := &LFUNode{
		Key:   key,
		Value: value,
		Count: this.Counter,
	}

	if len(this.Data) >= this.Cap {
		for i := len(this.Heap)/2 - 1; i >= 0; i-- {
			left := i*2 + 1
			right := (i + 1) * 2

			var minIdx int
			if (this.Heap[left].Freq < this.Heap[i].Freq) || (this.Heap[left].Freq == this.Heap[i].Freq && this.Heap[left].Count < this.Heap[i].Count) {
				minIdx = left
			} else {
				minIdx = i
			}

			if right < len(this.Heap) {
				if (this.Heap[right].Freq < this.Heap[minIdx].Freq) || (this.Heap[right].Freq == this.Heap[minIdx].Freq && this.Heap[right].Count < this.Heap[minIdx].Count) {
					minIdx = right
				}
			}

			if minIdx != i {
				tmp := this.Heap[i]
				this.Heap[i] = this.Heap[minIdx]
				this.Heap[minIdx] = tmp
			}
		}

		popNode := this.Heap[0]
		delete(this.Data, popNode.Key)
		this.Heap = this.Heap[1:]
	}

	this.Data[key] = node
	this.Heap = append(this.Heap, node)
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * obj := Constructor(capacity);
 * param_1 := obj.Get(key);
 * obj.Put(key,value);
 */

func main() {
	// cache := Constructor(2)
	// cache.Put(1, 1)
	// // fmt.Println(*cache.data[1])
	// cache.Put(2, 2)
	// // fmt.Println(*cache.data[1])
	// fmt.Println(cache.Get(1))
	// // fmt.Println(*cache.data[1])
	// cache.Put(3, 3)
	// // fmt.Println(*cache.data[1])
	// fmt.Println(cache.Get(2))
	// fmt.Println(cache.Get(3))
	// cache.Put(4, 4)
	// fmt.Println(cache.Get(1))
	// fmt.Println(cache.Get(3))
	// fmt.Println(cache.Get(4))

	cache := Constructor(10)
	cache.Put(10, 13)
	cache.Put(3, 17)
	cache.Put(6, 11)
	cache.Put(10, 5)
	cache.Put(9, 10)
	fmt.Println("Get 13:", cache.Get(13))
	cache.Put(2, 19)
	fmt.Println("Get 2:", cache.Get(2))
	fmt.Println("Get 3:", cache.Get(3))
	cache.Put(5, 25)
	fmt.Println("Get 8:", cache.Get(8))
	cache.Put(9, 22)
	cache.Put(5, 5)
	cache.Put(1, 30)
	fmt.Println("Get 11:", cache.Get(11))
	cache.Put(9, 12)
	fmt.Println("Get 7:", cache.Get(7))
	fmt.Println("Get 5:", cache.Get(5))
	fmt.Println("Get 8:", cache.Get(8))
	fmt.Println("Get 9:", cache.Get(9))
	cache.Put(4, 30)
	cache.Put(9, 3)
	fmt.Println("Get 9:", cache.Get(9))
	fmt.Println("Get 10:", cache.Get(10))
	fmt.Println("Get 10:", cache.Get(10))
	cache.Put(6, 14)
	cache.Put(3, 1)
	fmt.Println("Get 3:", cache.Get(3))
	cache.Put(10, 11)
	fmt.Println("Get 8:", cache.Get(8))
	cache.Put(2, 14)
	fmt.Println("Get 1:", cache.Get(1))
	fmt.Println("Get 5:", cache.Get(5))
	fmt.Println("Get 4:", cache.Get(4))
	cache.Put(11, 4)
	cache.Put(12, 24)
	cache.Put(5, 18)
	fmt.Println("Get 13:", cache.Get(13))
	cache.Put(7, 23)
	fmt.Println("Get 8:", cache.Get(8))
	fmt.Println("Get 12:", cache.Get(12))
	cache.Put(3, 27)
	cache.Put(2, 12)
	fmt.Println("Get 5:", cache.Get(5))
	cache.Put(2, 9)
	cache.Put(13, 4)
	cache.Put(8, 18)
	cache.Put(1, 7)
	fmt.Println("Get 6:", cache.Get(6))
	cache.Put(9, 29)
	cache.Put(8, 21)
	fmt.Println("Get 5:", cache.Get(5))
	cache.Put(6, 30)
	cache.Put(1, 12)
	fmt.Println("Get 10:", cache.Get(10))
	cache.Put(4, 15)
	cache.Put(7, 22)
	cache.Put(11, 26)
	cache.Put(8, 17)
	cache.Put(9, 29)
	fmt.Println("Get 5:", cache.Get(5))
	cache.Put(3, 4)
	cache.Put(11, 30)
	fmt.Println("Get 12:", cache.Get(12))
	cache.Put(4, 29)
	fmt.Println("Get 3:", cache.Get(3))
	fmt.Println("Get 9:", cache.Get(9))
	fmt.Println("Get 6:", cache.Get(6))
	cache.Put(3, 4)
	fmt.Println("Get 1:", cache.Get(1))
	fmt.Println("Get 10:", cache.Get(10))
	cache.Put(3, 29)
	cache.Put(10, 28)
	cache.Put(1, 20)
	cache.Put(11, 13)
	fmt.Println("Get 3:", cache.Get(3))
	cache.Put(3, 12)
	cache.Put(3, 8)
	cache.Put(10, 9)
	cache.Put(3, 26)
	fmt.Println("Get 8:", cache.Get(8))
	fmt.Println("Get 7:", cache.Get(7))
	fmt.Println("Get 5:", cache.Get(5))
	cache.Put(13, 17)
	cache.Put(2, 27)
	cache.Put(11, 15)
	fmt.Println("Get 12:", cache.Get(12))
	cache.Put(9, 19)
	cache.Put(2, 15)
	cache.Put(3, 16)
	fmt.Println("Get 1:", cache.Get(1))
	cache.Put(12, 17)
	cache.Put(9, 1)
	cache.Put(6, 19)
	fmt.Println("Get 4:", cache.Get(4))
	fmt.Println("Get 5:", cache.Get(5))
	fmt.Println("Get 5:", cache.Get(5))
	cache.Put(8, 1)
	cache.Put(11, 7)
	cache.Put(5, 2)
	cache.Put(9, 28)
	fmt.Println("Get 1:", cache.Get(1))
	cache.Put(2, 2)
	cache.Put(7, 4)
	cache.Put(4, 22)
	cache.Put(7, 24)
	cache.Put(9, 26)
	cache.Put(13, 28)
	cache.Put(11, 26)
}
