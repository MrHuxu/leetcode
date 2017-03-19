/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if (!root) return [];
    var result = [];
    var traversal = function (node) {
        result.push(node.val);
        if (node.left) traversal(node.left);
        if (node.right) traversal(node.right);
        return;
    };
    traversal(root);
    return result;
};