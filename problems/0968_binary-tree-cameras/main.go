package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

const (
	NULL = iota
	COVER
	CAMERA
)

func minCameraCover(root *TreeNode) int {
	status, cnt := dfs(root)
	if status == NULL {
		return cnt + 1
	}
	return cnt
}

func dfs(node *TreeNode) (status, cnt int) {
	if node == nil {
		return COVER, 0
	}

	statusL, cntL := dfs(node.Left)
	statusR, cntR := dfs(node.Right)

	if statusL == NULL || statusR == NULL {
		return CAMERA, cntL + cntR + 1
	}

	if statusL == CAMERA || statusR == CAMERA {
		return COVER, cntL + cntR
	}

	return NULL, cntL + cntR
}
