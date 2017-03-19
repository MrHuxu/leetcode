var pathSum = function(root, sum) {
  if (!root) return 0;

  var result = 0;
  var dfs = function (node, parent) {
    node.vals = {};
    node.vals[node.val] = 1;
    if (parent) {
      Object.keys(parent.vals).forEach(function (v) {
        var tmp = node.val + Number(v);
        node.vals[tmp] = tmp in node.vals? ++node.vals[tmp] : 1;
      });
    }

    result += sum in node.vals ? node.vals[sum] : 0;

    if (node.left) dfs(node.left, node);
    if (node.right) dfs(node.right, node);
  };
  dfs(root, null);

  return result;
};

var root = {
  val  : 10,
  left : {
    val  : 5,
    left : {
      val  : 3,
      left : {
        val   : 3,
        left  : null,
        right : null
      },
      right : {
        val   : -2,
        left  : null,
        right : null
      }
    },
    right : {
      val   : 2,
      left  : null,
      right : {
        val   : 1,
        left  : null,
        right : null
      }
    }
  },
  right : {
    val   : -3,
    left  : null,
    right : {
      val   : 11,
      left  : null,
      right : null
    }
  }
};
var root2 = {
  val   : 1,
  left  : null,
  right : null
};

var root3 = {
  val  : 0,
  left : {
    val   : 1,
    left  : null,
    right : null
  },
  right : {
    val   : 1,
    left  : null,
    right : null
  }
};

console.log(pathSum(root, 8));
console.log(pathSum(root2, 0));
console.log(pathSum(root3, 1));