 function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
 }

var flatten = function(root) {
  if (!root) return;
  var result = [];
  var traversal = function (node) {
      result.push(node.val);
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
      return;
  };
  traversal(root);
  var iterator = root;
  for (var i = 1, len = result.length; i <= len; ++i) {
    iterator.left = null;
    iterator.right = result[i] === undefined ? null : new TreeNode(result[i]);
    iterator = iterator.right;
  }
};

console.log(flatten({
  val  : 1,
  left : {
    val   : 2,
    left  : null,
    right : null
  },
  right : null
}));