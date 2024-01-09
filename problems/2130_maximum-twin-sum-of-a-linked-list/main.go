package main

import (
	"fmt"
	"testing"
)

type ListNode struct {
	Val  int
	Next *ListNode
}

func pairSum(head *ListNode) int {
	if head == nil {
		return 0
	}

	n := 0

	tmp := head
	for tmp != nil {
		n++
		tmp = tmp.Next
	}

	_, maxVal := helper(head, 0, n/2)
	return maxVal
}

func helper(head *ListNode, step, half int) (*ListNode, int) {
	if step == half {
		return head, head.Val
	}

	twin, maxVal := helper(head.Next, step+1, half)
	if head.Val+twin.Val > maxVal {
		maxVal = head.Val + twin.Val
	}

	return twin.Next, maxVal
}

func Test2130(t *testing.T) {
	fmt.Println(pairSum(&ListNode{
		5,
		&ListNode{
			4,
			&ListNode{
				2,
				&ListNode{1, nil},
			},
		},
	}))
	fmt.Println(pairSum(&ListNode{
		4,
		&ListNode{
			2,
			&ListNode{
				2,
				&ListNode{3, nil},
			},
		},
	}))
	t.Error()
}
