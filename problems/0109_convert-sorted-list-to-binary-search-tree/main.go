package main

type ListNode struct {
	Val  int
	Next *ListNode
}

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func sortedListToBST(head *ListNode) *TreeNode {
	if head == nil {
		return nil
	}

	dummyHead := &ListNode{Next: head}
	fast, slow := dummyHead, dummyHead

	var preSlow *ListNode
	for fast != nil {
		fast = fast.Next
		if fast != nil {
			fast = fast.Next
		}

		preSlow = slow
		slow = slow.Next
	}

	node := &TreeNode{Val: slow.Val}

	if slow != dummyHead.Next {
		preSlow.Next = nil
		node.Left = sortedListToBST(dummyHead.Next)
	}
	if slow.Next != nil {
		node.Right = sortedListToBST(slow.Next)
	}

	return node
}
