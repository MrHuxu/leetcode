package main

type Node struct {
	Val      int
	Children []*Node
}

func preorder(root *Node) []int {
	if root == nil {
		return nil
	}

	ans := []int{root.Val}
	for _, node := range root.Children {
		ans = append(ans, preorder(node)...)
	}

	return ans
}
