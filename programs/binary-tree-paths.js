var binaryTreePaths = function(root) {
  var result = [];

  var dfs = function (node, str) {
    if (node) {
      str = str + (str.length ? '->' : '') + node.val;
      if (!node.left && !node.right) {
        result.push(str);
      }
      dfs(node.left, str);
      dfs(node.right, str);
    }
  };
  dfs(root, '');

  return result;
};

var root = {
  val  : 1,
  left : {
    val   : 2,
    left  : null,
    right : {
      val   : 5,
      left  : null,
      right : null
    }
  },
  right : {
    val   : 3,
    left  : null,
    right : null
  }
};

console.log(binaryTreePaths(root));