package main

import (
	"fmt"
	"testing"
)

type Node struct {
	Val         bool
	IsLeaf      bool
	TopLeft     *Node
	TopRight    *Node
	BottomLeft  *Node
	BottomRight *Node
}

func construct(grid [][]int) *Node {
	n := len(grid)
	return dfs(0, 0, n-1, n-1, grid)
}

func dfs(startX, startY, endX, endY int, grid [][]int) (node *Node) {
	val := grid[startX][startY]

	if startX == endX {
		return &Node{Val: val == 1, IsLeaf: true}
	}

	topLeftNode := dfs(startX, startY, (startX+endX)/2, (startY+endY)/2, grid)
	topRightNode := dfs(startX, (startY+endY)/2+1, (startX+endX)/2, endY, grid)
	bottomLeftNode := dfs((startX+endX)/2+1, startY, endX, (startY+endY)/2, grid)
	bottomRightNode := dfs((startX+endX)/2+1, (startY+endY)/2+1, endX, endY, grid)

	isLeaf := (topLeftNode.IsLeaf && topRightNode.IsLeaf && bottomLeftNode.IsLeaf && bottomRightNode.IsLeaf) && ((topLeftNode.Val && topRightNode.Val && bottomLeftNode.Val && bottomRightNode.Val) || (!topLeftNode.Val && !topRightNode.Val && !bottomLeftNode.Val && !bottomRightNode.Val))
	if isLeaf {
		return &Node{Val: val == 1, IsLeaf: true}
	}

	return &Node{
		Val: val == 1, IsLeaf: false,
		TopLeft:     topLeftNode,
		TopRight:    topRightNode,
		BottomLeft:  bottomLeftNode,
		BottomRight: bottomRightNode,
	}
}

func Test427(t *testing.T) {
	root := construct([][]int{
		{0, 1},
		{1, 0},
	})
	fmt.Println(root)
	fmt.Println(root.TopLeft)
	fmt.Println(root.TopRight)
	fmt.Println(root.BottomLeft)
	fmt.Println(root.BottomRight)
	fmt.Println(construct([][]int{
		{1, 1, 1, 1, 0, 0, 0, 0},
		{1, 1, 1, 1, 0, 0, 0, 0},
		{1, 1, 1, 1, 1, 1, 1, 1},
		{1, 1, 1, 1, 1, 1, 1, 1},
		{1, 1, 1, 1, 0, 0, 0, 0},
		{1, 1, 1, 1, 0, 0, 0, 0},
		{1, 1, 1, 1, 0, 0, 0, 0},
		{1, 1, 1, 1, 0, 0, 0, 0},
	}))
	t.Error()
}
