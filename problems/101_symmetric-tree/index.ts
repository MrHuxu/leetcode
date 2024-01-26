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

function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return true;
    return checkSymmetric(root.left, root.right);
};

const checkSymmetric = (left: TreeNode | null, right: TreeNode | null): boolean => {
    if (!left && !right) return true;
    if (!left || !right) return false;

    return left.val === right.val && checkSymmetric(left.left, right.right) && checkSymmetric(left.right, right.left);
};

test('101', () => {
    expect(isSymmetric(buildTree([1, 2, 2, 3, 4, 4, 3]))).toBeTruthy();
    expect(isSymmetric(buildTree([1, 2, 2, null, 3, null, 3]))).toBeFalsy();
});