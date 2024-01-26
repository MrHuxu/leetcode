import { TreeNode, buildTree } from "./tree";

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

function sumNumbers(root: TreeNode | null): number {
    return helper(0, root);
};

const helper = (pre: number, root: TreeNode | null): number => {
    if (!root) return pre;

    const curr = pre * 10 + root.val;
    if (!root.left && !root.right) return curr;

    return (root.left ? helper(curr, root.left) : 0)
        + (root.right ? helper(curr, root.right) : 0);
};

test('129', () => {
    expect(sumNumbers(buildTree([1, 0]))).toBe(10);
    expect(sumNumbers(buildTree([1, 2, 3]))).toBe(25);
    expect(sumNumbers(buildTree([4, 9, 0, 5, 1]))).toBe(1026);
});
