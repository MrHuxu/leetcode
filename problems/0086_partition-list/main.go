package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func partition(head *ListNode, x int) *ListNode {
	dummyHeader := &ListNode{Next: head}
	largerHeader := &ListNode{}

	pre := dummyHeader
	cur := head
	largerCur := largerHeader
	for cur != nil {
		if cur.Val < x {
			pre = cur
			cur = cur.Next
		} else {
			pre.Next = cur.Next

			largerCur.Next = cur
			largerCur = largerCur.Next

			cur = cur.Next
			largerCur.Next = nil
		}
	}

	tmp := dummyHeader
	for tmp.Next != nil {
		tmp = tmp.Next
	}
	tmp.Next = largerHeader.Next

	return dummyHeader.Next
}
