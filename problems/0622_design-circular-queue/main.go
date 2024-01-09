package main

type MyCircularQueue struct {
	cap         int
	free        int
	front, rear *node
}

type node struct {
	val        int
	prev, next *node
}

func Constructor(k int) MyCircularQueue {
	return MyCircularQueue{
		cap:  k,
		free: k,
	}
}

func (this *MyCircularQueue) EnQueue(value int) bool {
	if this.free <= 0 {
		return false
	}

	nextRear := &node{
		val: value,
	}

	if this.free == this.cap {
		this.front = nextRear
	} else {
		nextRear.prev = this.rear
		nextRear.next = this.front
		this.rear.next = nextRear
		this.front.prev = nextRear
	}
	this.rear = nextRear

	this.free--
	return true
}

func (this *MyCircularQueue) DeQueue() bool {
	if this.free >= this.cap {
		return false
	}

	if this.free == this.cap-1 {
		this.front = nil
		this.rear = nil
	} else {
		nextFront := this.front.next
		nextFront.prev = this.rear
		this.rear.next = nextFront
		this.front = nextFront
	}

	this.free++
	return true
}

func (this *MyCircularQueue) Front() int {
	if this.front != nil {
		return this.front.val
	}

	return -1
}

func (this *MyCircularQueue) Rear() int {
	if this.rear != nil {
		return this.rear.val
	}

	return -1
}

func (this *MyCircularQueue) IsEmpty() bool {
	return this.free == this.cap
}

func (this *MyCircularQueue) IsFull() bool {
	return this.free == 0
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * obj := Constructor(k);
 * param_1 := obj.EnQueue(value);
 * param_2 := obj.DeQueue();
 * param_3 := obj.Front();
 * param_4 := obj.Rear();
 * param_5 := obj.IsEmpty();
 * param_6 := obj.IsFull();
 */
