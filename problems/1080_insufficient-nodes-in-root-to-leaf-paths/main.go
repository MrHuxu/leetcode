package main

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func sufficientSubset(root *TreeNode, limit int) *TreeNode {
	var dfs func(node *TreeNode, sum int) (*TreeNode)
	dfs = func(node *TreeNode, sum int) (*TreeNode) {
		if node.Left == nil && node.Right == nil {
			if node.Val + sum >= limit {
				return node
			} 
			return nil
		}

		var left, right *TreeNode

		if node.Left != nil {
			left = dfs(node.Left, node.Val + sum)
		}
		if node.Right != nil {
			right = dfs(node.Right, node.Val + sum)
		}

		if left == nil && right == nil {
			return nil
		}
		return node
	}

	return dfs(root, 0)
}

func main() {

}
