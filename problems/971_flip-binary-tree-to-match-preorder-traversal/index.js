/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} voyage
 * @return {number[]}
 */
let flipMatchVoyage = function(root, voyage) {
  const result = [];
  let hasErr;
  const traverse = (node, arr) => {
    if (hasErr) return;

    if (node.val !== arr[0]) {
      hasErr = true;
      return;
    }

    if (node.left && node.right) {
      if (node.left.val === arr[1]) {
        const idx = arr.findIndex(v => v === node.right.val);
        if (idx !== -1) {
          traverse(node.left, arr.slice(1, idx));
          traverse(node.right, arr.slice(idx));
        } else hasErr = true;

      } else if (node.right.val === arr[1]) {
        const idx = arr.findIndex(v => v === node.left.val);
        if (idx !== -1) {
          result.push(node.val);
          traverse(node.right, arr.slice(1, idx));
          traverse(node.left, arr.slice(idx));
        } else hasErr = true;
      } else hasErr = true;
    } else {
      if (node.left && node.left.val === arr[1]) traverse(node.left, arr.slice(1));
      else if (node.right && node.right.val === arr[1]) traverse(node.right, arr.slice(1));
      else if (!node.left && !node.right && 1 === arr.length) return;
      else hasErr = true;
    }
  };
  traverse(root, voyage);

  if (hasErr) return [-1];
  return result;
};

module.exports = flipMatchVoyage;