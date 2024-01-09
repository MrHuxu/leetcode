package main

import (
	"fmt"
	"testing"
)

type SmallestInfiniteSet struct {
	removed map[int]int
}

func Constructor() SmallestInfiniteSet {
	return SmallestInfiniteSet{
		removed: make(map[int]int),
	}
}

func (this *SmallestInfiniteSet) PopSmallest() int {
	for i := 1; i <= 3000; i++ {
		if _, ok := this.removed[i]; !ok {
			this.removed[i] = 1
			return i
		}
	}
	return 0
}

func (this *SmallestInfiniteSet) AddBack(num int) {
	if _, ok := this.removed[num]; ok {
		delete(this.removed, num)
	}
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.PopSmallest();
 * obj.AddBack(num);
 */

func Test2336(t *testing.T) {
	si := Constructor()
	si.AddBack(2)
	fmt.Println(si.PopSmallest())
	fmt.Println(si.PopSmallest())
	fmt.Println(si.PopSmallest())
	si.AddBack(1)
	fmt.Println(si.PopSmallest())
	fmt.Println(si.PopSmallest())
	fmt.Println(si.PopSmallest())
	t.Error()
}

/*

Input
["SmallestInfiniteSet", "addBack", "popSmallest", "popSmallest", "popSmallest", "addBack", "popSmallest", "popSmallest", "popSmallest"]
[[], [2], [], [], [], [1], [], [], []]
Output
[null, null, 1, 2, 3, null, 1, 4, 5]

Explanation
SmallestInfiniteSet smallestInfiniteSet = new SmallestInfiniteSet();
smallestInfiniteSet.addBack(2);    // 2 is already in the set, so no change is made.
smallestInfiniteSet.popSmallest(); // return 1, since 1 is the smallest number, and remove it from the set.
smallestInfiniteSet.popSmallest(); // return 2, and remove it from the set.
smallestInfiniteSet.popSmallest(); // return 3, and remove it from the set.
smallestInfiniteSet.addBack(1);    // 1 is added back to the set.
smallestInfiniteSet.popSmallest(); // return 1, since 1 was added back to the set and
                                   // is the smallest number, and remove it from the set.
smallestInfiniteSet.popSmallest(); // return 4, and remove it from the set.
smallestInfiniteSet.popSmallest(); // return 5, and remove it from the set.
*/
