package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func isPalindrome(head *ListNode) bool {
	_, ans := helper(head, nil)
	return ans
}

func helper(head *ListNode, arr []int) ([]int, bool) {
	if head == nil {
		return arr, true
	}

	arr, ans := helper(head.Next, append(arr, head.Val))

	if !ans {
		return arr[1:], false
	}

	return arr[1:], head.Val == arr[0]
}
