var isSymmetric = function(root) {
  var i, j, lowerNodes, flag;

  var compare = function (nodes) {
    if (!nodes.length) return;

    flag = true;
    for (var i = 0, j = nodes.length - 1; i <= j; ++i, --j) {
      if (!((!nodes[i] && !nodes[j]) || (nodes[i] && nodes[j] && nodes[i].val === nodes[j].val))) {
        flag = false;
        break;
      }
    }
    lowerNodes = [];
    nodes.forEach(function (node) {
      if (node) {
        lowerNodes.push(node.left);
        lowerNodes.push(node.right);
      }
    });

    compare(lowerNodes);
  }
  compare([root]);

  return flag;
};

var root1 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  }
};

var root2 = {
    val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 3,
      left: null,
      right: null
    }
  },
  right: {
    val: 2,
    left: null,
    right: {
      val: 3,
      left: null,
      right: null
    }
  }
}

console.log(isSymmetric(root1));
console.log(isSymmetric(root2));