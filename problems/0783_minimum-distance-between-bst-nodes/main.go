package main

import (
	"fmt"
	"math"
	"sort"
	"testing"
)

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func minDiffInBST(root *TreeNode) int {
	nums := traverse(root)
	sort.Slice(nums, func(i, j int) bool { return nums[i] < nums[j] })

	res := math.MaxInt
	for i := 0; i < len(nums)-1; i++ {
		if tmp := int(math.Abs(float64(nums[i] - nums[i+1]))); tmp < res {
			res = tmp
		}
	}
	return res
}

func traverse(root *TreeNode) []int {
	if root == nil {
		return nil
	}
	return append(append([]int{root.Val}, traverse(root.Left)...), traverse(root.Right)...)
}

func Test783(t *testing.T) {
	fmt.Println(minDiffInBST(
		&TreeNode{
			27,
			nil,
			&TreeNode{
				34,
				nil,
				&TreeNode{
					58,
					&TreeNode{
						50,
						&TreeNode{
							44,
							nil,
							nil,
						},
						nil,
					},
					nil,
				},
			},
		},
	))
	t.Error()
}
