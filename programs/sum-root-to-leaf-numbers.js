var sumNumbers = function(root) {
  if (!root) return 0;
  var result = 0;

  var recursion = function (node, str) {
    if (node.left === null && node.right === null) {
      result += parseInt(str + node.val, 10);
    } else {
      if (node.left !== null)
        recursion(node.left, str + node.val);
      if (node.right !== null)
        recursion(node.right, str + node.val);
    }
  }
  recursion(root, '');

  return result;
};

var root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
};
console.log(sumNumbers(root));