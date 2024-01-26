package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func flipMatchVoyage(root *TreeNode, voyage []int) []int {
	result, valid := helper(root, voyage)

	if !valid {
		return []int{-1}
	}
	return result
}

func helper(root *TreeNode, voyage []int) ([]int, bool) {
	if root == nil {
		if len(voyage) == 0 {
			return nil, true
		}

		return nil, false
	}

	if root.Val != voyage[0] {
		return nil, false
	}

	var leftIdx, rightIdx int
	for i := 1; i < len(voyage); i++ {
		if root.Left != nil && root.Left.Val == voyage[i] {
			leftIdx = i
		}

		if root.Right != nil && root.Right.Val == voyage[i] {
			rightIdx = i
		}
	}

	switch {
	case root.Left == nil && root.Right == nil:
		return nil, len(voyage) == 1

	case root.Left == nil && root.Right != nil:
		if rightIdx == 1 {
			r1, r2 := helper(root.Right, voyage[1:])
			return r1, r2
		}
		return nil, false

	case root.Right == nil && root.Left != nil:
		if leftIdx == 1 {
			l1, l2 := helper(root.Left, voyage[1:])
			return l1, l2
		}
		return nil, false

	default:
		if leftIdx == 0 || rightIdx == 0 {
			return nil, false
		}

		if leftIdx == 1 {
			l1, l2 := helper(root.Left, voyage[1:rightIdx])
			r1, r2 := helper(root.Right, voyage[rightIdx:])

			return append(l1, r1...), l2 && r2
		} else if rightIdx == 1 {
			l1, l2 := helper(root.Left, voyage[leftIdx:])
			r1, r2 := helper(root.Right, voyage[1:leftIdx])

			return append(append([]int{root.Val}, l1...), r1...), l2 && r2
		}

		return nil, false
	}
}
