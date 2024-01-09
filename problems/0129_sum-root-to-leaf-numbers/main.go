package main

import . "github.com/MrHuxu/types"

// code
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func sumNumbers(root *TreeNode) int {
	return helper(0, root)
}

func helper(pre int, root *TreeNode) int {
	if root == nil {
		return pre
	}

	curr := pre*10 + root.Val
	if root.Left == nil && root.Right == nil {
		return curr
	}

	var res int
	if root.Left != nil {
		res += helper(curr, root.Left)
	}
	if root.Right != nil {
		res += helper(curr, root.Right)
	}
	return res
}
