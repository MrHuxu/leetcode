var isValidBST = function(root) {
  var flag = true;
  
  var validate = function (node, min, max) {
    if (flag && node) {
      if (node.left) {
        if (max) {
          (node.left.val < node.val && node.left.val > max) ? validate(node.left, node.val, max) : flag = false;
        } else {
          (node.left.val < node.val) ? validate(node.left, node.val, max) : flag = false;
        }
      }
      
      if (node.right) {
        if (min) {
          (node.right.val > node.val && node.right.val < min) ? validate(node.right, min, node.val) : flag = false;
        } else {
          (node.right.val > node.val) ? validate(node.right, min, node.val) : flag = false;
        }
      }
    }
  }
  validate(root, null, null);
  
  return flag;
};

var root1 = {
  val: 2,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
};
console.log(isValidBST(root1));

var root2 = {
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
console.log(isValidBST(root2));