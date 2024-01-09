public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int x) {
        val = x;
    }
}

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

class Solution {
    public final TreeNode getTargetCopy(final TreeNode original, final TreeNode cloned, final TreeNode target) {
        if (original == null)
            return null;

        if (original.val == target.val)
            return cloned;

        TreeNode leftRet = getTargetCopy(original.left, cloned.left, target);
        return leftRet != null ? leftRet : getTargetCopy(original.right, cloned.right, target);
    }
}