// +build getAllElements

package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func getAllElements(root1 *TreeNode, root2 *TreeNode) []int {
	var result []int
	var arr1 []int

	var traverse1, traverse2 func(*TreeNode)
	traverse1 = func(node *TreeNode) {
		if node == nil {
			return
		}

		traverse1(node.Left)
		arr1 = append(arr1, node.Val)
		traverse1(node.Right)
	}
	traverse1(root1)

	traverse2 = func(node *TreeNode) {
		if node == nil {
			return
		}

		traverse2(node.Left)

		for len(arr1) > 0 && arr1[0] < node.Val {
			result = append(result, arr1[0])
			arr1 = arr1[1:len(arr1)]
		}
		result = append(result, node.Val)

		traverse2(node.Right)
	}
	traverse2(root2)

	result = append(result, arr1...)

	return result
}

func main() {
	root1 := &TreeNode{
		Val:   2,
		Left:  &TreeNode{Val: 1},
		Right: &TreeNode{Val: 4},
	}
	root2 := &TreeNode{
		Val:   1,
		Left:  &TreeNode{Val: 0},
		Right: &TreeNode{Val: 3},
	}
	fmt.Println(getAllElements(root1, root2))
}
