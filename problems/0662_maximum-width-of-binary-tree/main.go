package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func widthOfBinaryTree(root *TreeNode) int {
	if root == nil {
		return 0
	}
	leftBound, rightBound := map[int]int{}, map[int]int{}
	helper(leftBound, rightBound, root, 0, 0)

	ret := 1
	for depth := range leftBound {
		if rightBound[depth]-leftBound[depth]+1 > ret {
			ret = rightBound[depth] - leftBound[depth] + 1
		}
	}
	return ret
}

func helper(leftBound, rightBound map[int]int, node *TreeNode, depth int, pos int) {
	if node == nil {
		return
	}

	if tmp, ok := leftBound[depth]; !ok || pos < tmp {
		leftBound[depth] = pos
	}
	if tmp, ok := rightBound[depth]; !ok || pos > tmp {
		rightBound[depth] = pos
	}

	helper(leftBound, rightBound, node.Left, depth+1, pos*2)
	helper(leftBound, rightBound, node.Right, depth+1, pos*2+1)
}
