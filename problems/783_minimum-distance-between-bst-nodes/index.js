/**
 * Problem: https://leetcode.com/problems/minimum-distance-between-bst-nodes/description/
 */

const minimumDistanceBetweenBstNodes = root => {
  let min = Number.MAX_SAFE_INTEGER;
  const traverse = node => {
    let Lres, Rres;
    if (node.left) {
      Lres = traverse(node.left);
      min = Math.min(min, node.val - Lres.max);
    }
    if (node.right) {
      Rres = traverse(node.right);
      min = Math.min(min, Rres.min - node.val);
    }

    return {
      min : node.left ? Lres.min : node.val,
      max : node.right ? Rres.max : node.val
    };
  };
  traverse(root);

  return min;
};

module.exports = minimumDistanceBetweenBstNodes;
