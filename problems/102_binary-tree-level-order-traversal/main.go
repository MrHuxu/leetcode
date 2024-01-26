package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func levelOrder(root *TreeNode) [][]int {
	if root == nil {
		return nil
	}

	var ans [][]int
	level := []*TreeNode{root}
	for len(level) != 0 {
		var vals []int
		var nextLevel []*TreeNode

		for _, node := range level {
			vals = append(vals, node.Val)
			if node.Left != nil {
				nextLevel = append(nextLevel, node.Left)
			}
			if node.Right != nil {
				nextLevel = append(nextLevel, node.Right)
			}
		}

		ans = append(ans, vals)
		level = nextLevel
	}

	return ans
}
