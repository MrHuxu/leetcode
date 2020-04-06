package main

import (
	"fmt"

	"github.com/MrHuxu/types"
)

// code

/**
 * Definition for TreeNode.
 * type TreeNode struct {
 *     Val int
 *     Left *ListNode
 *     Right *ListNode
 * }
 */
func lowestCommonAncestor(root, p, q *types.TreeNode) *types.TreeNode {
	if root == nil || root == p || root == q {
		return root
	}

	leftCommonAncestor := lowestCommonAncestor(root.Left, p, q)
	rightCommonAncestor := lowestCommonAncestor(root.Right, p, q)

	if leftCommonAncestor == nil {
		return rightCommonAncestor
	}
	if rightCommonAncestor == nil {
		return leftCommonAncestor
	}
	return root
}

func main() {
	tree := types.BuildTree([]interface{}{3, 5, 1, 6, 2, 0, 8, nil, nil, 7, 4})
	p := tree.Left
	q := tree.Right
	fmt.Println(lowestCommonAncestor(tree, p, q))

	p = tree.Left
	q = tree.Left.Right.Right
	fmt.Println(lowestCommonAncestor(tree, p, q))
}
