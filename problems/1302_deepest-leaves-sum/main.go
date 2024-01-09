package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func deepestLeavesSum(root *TreeNode) int {
	mapDepthToVal := make(map[int]int)

	var maxDepth int
	var dfs func(int, *TreeNode)
	dfs = func(depth int, node *TreeNode) {
		if node == nil {
			return
		}

		if node.Left == nil && node.Right == nil {
			maxDepth = max(maxDepth, depth)
			mapDepthToVal[depth] += node.Val
			return
		}

		dfs(depth+1, node.Left)
		dfs(depth+1, node.Right)
	}
	dfs(0, root)

	return mapDepthToVal[maxDepth]
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
