package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func invertTree(root *TreeNode) *TreeNode {
	if root == nil {
		return nil
	}

	return &TreeNode{
		root.Val,
		invertTree(root.Right),
		invertTree(root.Left),
	}
}
