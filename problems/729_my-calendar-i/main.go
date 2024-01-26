package main

type MyCalendar struct {
	data [][]int
}

func Constructor() MyCalendar {
	return MyCalendar{}
}

func (this *MyCalendar) Book(start int, end int) bool {
	if len(this.data) == 0 {
		this.data = append(this.data, []int{start, end})
		return true
	}

	for _, meeting := range this.data {
		if !(start >= meeting[1] || end <= meeting[0]) {
			return false
		}
	}

	for i, meeting := range this.data {
		if end < meeting[0] {
			if i == 0 {
				this.data = append([][]int{{start, end}}, this.data...)
				return true
			}

			if this.data[i-1][1] == start {
				this.data[i-1][1] = end
				return true
			}

			tmp := make([][]int, len(this.data)-i)
			copy(tmp, this.data[i:])
			this.data = append(append(this.data[:i], []int{start, end}), tmp...)
			return true
		}

		if end == meeting[0] {
			if i == 0 || this.data[i-1][1] != start {
				this.data[i][0] = start
				return true
			}

			if this.data[i-1][1] == start {
				this.data[i][0] = this.data[i-1][0]
				this.data = append(this.data[:i-1], this.data[i:]...)
				return true
			}
		}
	}

	this.data = append(this.data, []int{start, end})
	return true
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Book(start,end);
 */
