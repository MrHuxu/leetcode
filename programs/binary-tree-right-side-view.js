var rightSideView = function(root) {
  if (!root) return [];
  var result = [];

  var traversal = function (nodes) {
    if (!nodes.length) return;
    result.push(nodes[nodes.length - 1].val);
    var lowerNodes = [], tmp = [];
    nodes.forEach(function (node) {
      tmp.push(node.val);
      if (node.left) lowerNodes.push(node.left);
      if (node.right) lowerNodes.push(node.right);
    });
    traversal(lowerNodes);
  }
  traversal([root]);

  return result;
};