var isValidBST = function(root) {
  var flag = true;
  
  var validate = function (node, min, max) {
    if (flag && node) {
      if (node.left) {
        if (max) {
          if (node.left.val < node.val && node.left.val > max)
            validate(node.left, node.val, max);
          else
            flag = false;
        } else {
          if (node.left.val < node.val)
            validate(node.left, node.val, max);
          else
            flag = false;
        }
      }
      
      if (node.right) {
        if (min) {
          if (node.right.val > node.val && node.right.val < min)
            validate(node.right, min, node.val);
          else
            flag = false;
        } else {
          if (node.right.val > node.val)
            validate(node.right, min, node.val);
          else
            flag = false;
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