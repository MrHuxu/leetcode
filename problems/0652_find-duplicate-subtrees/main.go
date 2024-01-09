package main

import (
	"fmt"
	"testing"
)

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func findDuplicateSubtrees(root *TreeNode) []*TreeNode {
	existInRes := make(map[*TreeNode]bool)
	compared := make(map[*TreeNode]map[*TreeNode]bool)
	mapValToNodes := make(map[int][]*TreeNode)

	queue := []*TreeNode{root}
	for len(queue) > 0 {
		node := queue[0]
		queue = queue[1:]
		for _, n := range mapValToNodes[node.Val] {
			if dfs(n, node, compared) {
				if !existInRes[n] && !existInRes[node] {
					existInRes[n] = true
				}
				break
			}
		}
		mapValToNodes[node.Val] = append(mapValToNodes[node.Val], node)
		if node.Left != nil {
			queue = append(queue, node.Left)
		}
		if node.Right != nil {
			queue = append(queue, node.Right)
		}
	}

	var res []*TreeNode
	for n := range existInRes {
		res = append(res, n)
	}
	return res
}

func dfs(root1, root2 *TreeNode, compared map[*TreeNode]map[*TreeNode]bool) (match bool) {
	if compared[root1] != nil {
		if m, ok := compared[root1][root2]; ok {
			return m
		}
	}
	defer func() {
		if compared[root1] == nil {
			compared[root1] = make(map[*TreeNode]bool)
		}
		compared[root1][root2] = match
	}()

	if root1 == nil && root2 == nil {
		return true
	}
	if root1 == nil || root2 == nil {
		return false
	}
	return root1.Val == root2.Val && dfs(root1.Left, root2.Left, compared) && dfs(root1.Right, root2.Right, compared)
}

/*
Input: root = [1,2,3,4,null,2,4,null,null,4]
Output: [[2,4],[4]]
*/

func Test652(t *testing.T) {
	fmt.Println(findDuplicateSubtrees(
		&TreeNode{
			Val: 1,
			Left: &TreeNode{
				Val: 2,
				Left: &TreeNode{
					Val: 4,
				},
			},
			Right: &TreeNode{
				Val: 3,
				Left: &TreeNode{
					Val: 2,
					Left: &TreeNode{
						Val: 4,
					},
				},
				Right: &TreeNode{
					Val: 4,
				},
			},
		},
	))
	fmt.Println(findDuplicateSubtrees(
		&TreeNode{
			Val: 2,
			Left: &TreeNode{
				Val: 1,
			},
			Right: &TreeNode{
				Val: 1,
			},
		},
	))
	fmt.Println(findDuplicateSubtrees(
		&TreeNode{
			Val: 2,
			Left: &TreeNode{
				Val: 2,
				Left: &TreeNode{
					Val: 3,
				},
			},
			Right: &TreeNode{
				Val: 2,
				Left: &TreeNode{
					Val: 3,
				},
			},
		},
	))
	t.Error()
}
