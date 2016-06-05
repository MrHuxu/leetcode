var lowestCommonAncestor = function(root, p, q) {
  var min = Math.min(p.val, q.val);
  var max = Math.max(p.val, q.val);
  
  while (root.val !== min && root.val !== max) {
    if (root.val > max)
      root = root.left;
    else if (root.val < min)
      root = root.right;
    else if (root.val > min && root.val < max)
      break;
  }
  
  return root;
};