// +build 199_2

package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func countPairs(root *TreeNode, distance int) int {
	var result int
	var traverse func(*TreeNode, int, map[int]int)
	traverse = func(node *TreeNode, depth int, data map[int]int) {
		switch {
		case node.Left == nil && node.Right == nil:
			data[depth]++

		case node.Right == nil:
			traverse(node.Left, depth+1, data)

		case node.Left == nil:
			traverse(node.Right, depth+1, data)

		default:
			leftData := make(map[int]int)
			traverse(node.Left, depth+1, leftData)
			rightData := make(map[int]int)
			traverse(node.Right, depth+1, rightData)

			for i := 2; i <= distance; i++ {
				for j := 1; j < i; j++ {
					result += leftData[j+depth] * rightData[i-j+depth]
				}
			}
			for d, c := range leftData {
				data[d] += c
			}
			for d, c := range rightData {
				data[d] += c
			}
		}
	}
	traverse(root, 0, make(map[int]int))

	return result
}

func main() {
	println(countPairs(&TreeNode{
		Val: 1,
		Left: &TreeNode{
			Val: 2,
			Right: &TreeNode{
				Val: 4,
			},
		},
		Right: &TreeNode{
			Val: 3,
		},
	}, 3))

	println(countPairs(&TreeNode{
		Val: 1,
		Left: &TreeNode{
			Val: 2,
			Left: &TreeNode{
				Val: 4,
			},
			Right: &TreeNode{
				Val: 5,
			},
		},
		Right: &TreeNode{
			Val: 3,
			Left: &TreeNode{
				Val: 6,
			},
			Right: &TreeNode{
				Val: 7,
			},
		},
	}, 3))
}
