package main

import (
	"fmt"
	"sort"
	"testing"
)

type SummaryRanges struct {
	mapHeadToTail map[int]int
	mapTailToHead map[int]int
}

func Constructor() SummaryRanges {
	return SummaryRanges{
		mapHeadToTail: make(map[int]int),
		mapTailToHead: make(map[int]int),
	}
}

func (this *SummaryRanges) AddNum(value int) {
	if len(this.mapHeadToTail) == 0 {
		this.mapHeadToTail[value] = value
		this.mapTailToHead[value] = value
		return
	}

	for k, v := range this.mapHeadToTail {
		if k <= value && value <= v {
			return
		}
	}

	head, ok1 := this.mapTailToHead[value-1]
	tail, ok2 := this.mapHeadToTail[value+1]
	switch {
	case ok1 && ok2:
		this.mapHeadToTail[head] = tail
		this.mapTailToHead[tail] = head
		delete(this.mapTailToHead, value-1)
		delete(this.mapHeadToTail, value+1)

	case ok1:
		this.mapHeadToTail[head] = value
		this.mapTailToHead[value] = head
		delete(this.mapTailToHead, value-1)

	case ok2:
		this.mapHeadToTail[value] = tail
		this.mapTailToHead[tail] = value
		delete(this.mapHeadToTail, value+1)

	default:
		this.mapHeadToTail[value] = value
		this.mapTailToHead[value] = value
	}
}

func (this *SummaryRanges) GetIntervals() [][]int {
	var intervals [][]int
	for k, v := range this.mapHeadToTail {
		intervals = append(intervals, []int{k, v})
	}
	sort.Slice(intervals, func(i, j int) bool { return intervals[i][0] < intervals[j][0] })
	return intervals
}

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * obj := Constructor();
 * obj.AddNum(value);
 * param_2 := obj.GetIntervals();
 */

func Test352(t *testing.T) {
	sr := Constructor()
	sr.AddNum(1)
	fmt.Println(sr.GetIntervals())
	sr.AddNum(3)
	fmt.Println(sr.GetIntervals())
	sr.AddNum(7)
	fmt.Println(sr.GetIntervals())
	sr.AddNum(2)
	fmt.Println(sr.GetIntervals())
	sr.AddNum(6)
	fmt.Println(sr.GetIntervals())
	t.Error()
}
