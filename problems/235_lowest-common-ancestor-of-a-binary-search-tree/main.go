package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
	max := max(p.Val, q.Val)
	min := min(p.Val, q.Val)

	for root.Val != min && root.Val != max {
		println(root.Val)
		switch {
		case root.Val < min:
			root = root.Right

		case root.Val > max:
			root = root.Left

		case root.Val > min && root.Val < max:
			return root
		}
	}
	return root
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
