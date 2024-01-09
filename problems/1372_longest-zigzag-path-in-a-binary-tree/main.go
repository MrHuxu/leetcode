package main

import (
	"fmt"
	"testing"

	. "github.com/MrHuxu/types"
)

func longestZigZag(root *TreeNode) int {
	_, _, ret := helper(root)
	return ret
}

func helper(root *TreeNode) (int, int, int) {
	if root.Left == nil && root.Right == nil {
		return 0, 0, 0
	}
	left, right, total := 0, 0, 0
	if root.Left != nil {
		_, r, t := helper(root.Left)
		left += r + 1
		total = max(total, t)
	}
	if root.Right != nil {
		l, _, t := helper(root.Right)
		right += l + 1
		total = max(total, t)
	}
	return left, right, max(max(left, right), total)
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func Test1372(t *testing.T) {
	fmt.Println(longestZigZag(BuildTree([]interface{}{1, nil, 1, 1, 1, nil, nil, 1, 1, nil, 1, nil, nil, nil, 1, nil, 1})))
	fmt.Println(longestZigZag(BuildTree([]interface{}{1, 1, 1, nil, 1, nil, nil, 1, 1, nil, 1})))
	fmt.Println(longestZigZag(BuildTree([]interface{}{1})))
	t.Error()
}
