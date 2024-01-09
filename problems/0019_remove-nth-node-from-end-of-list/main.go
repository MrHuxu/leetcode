package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func removeNthFromEnd(head *ListNode, n int) *ListNode {
	dummyHead := &ListNode{Next: head}

	slow, fast := dummyHead, head
	for ; n > 0; n-- {
		fast = fast.Next
	}

	for fast != nil {
		slow = slow.Next
		fast = fast.Next
	}

	slow.Next = slow.Next.Next
	return dummyHead.Next
}
