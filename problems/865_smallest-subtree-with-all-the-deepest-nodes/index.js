/**
 * Problem: https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/description/
 */

const smallestSubtreeWithAllTheDeepestNodes = root => {
  const traverse = (node, depth) => {
    let subtreeL, subtreeR;
    let depthL = depth;
    let depthR = depth;

    if (node.left) [subtreeL, depthL] = traverse(node.left, depth + 1);
    if (node.right) [subtreeR, depthR] = traverse(node.right, depth + 1);

    if (depthL === depthR)
      return [node, depthL];
    else
      return depthL > depthR ? [subtreeL, depthL] : [subtreeR, depthR];
  };

  return traverse(root, 0)[0];
};

module.exports = smallestSubtreeWithAllTheDeepestNodes;
