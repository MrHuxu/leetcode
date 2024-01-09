import { TreeNode, buildTree as buildBinaryTree } from "./tree";

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if (!inorder.length) return null;

    const val = postorder[postorder.length - 1];
    const idx = inorder.indexOf(val);
    return new TreeNode(
        val,
        buildTree(inorder.slice(0, idx), postorder.slice(0, idx)),
        buildTree(inorder.slice(idx + 1), postorder.slice(idx, postorder.length - 1)),
    )
};

test('106', () => {
    expect(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])).toStrictEqual(buildBinaryTree([3, 9, 20, null, null, 15, 7]));
    expect(buildTree([-1], [-1])).toStrictEqual(buildBinaryTree([-1]));
});