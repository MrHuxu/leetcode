var sumOfLeftLeaves = function(root) {
  var sum = 0;

  // position: true => left, false => right
  var visit = function (node, position) {
    if (!node.left && !node.right && position) {
      sum += node.val;
    } else {
      if (node.left) visit(node.left, true);
      if (node.right) visit(node.right, false);
    }
  };
  if (root) visit(root, false);

  return sum;
};

var test1 = {
  val  : 3,
  left : {
    val   : 9,
    left  : null,
    right : null
  },
  right : {
    val  : 20,
    left : {
      val   : 15,
      left  : null,
      right : null
    },
    right : {
      val   : 7,
      left  : null,
      right : null
    }
  }
};

console.log(sumOfLeftLeaves(test1));