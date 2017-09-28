var pathSum = function(root, sum) {
  if (!root) return [];

  var tmp, result = [];

  var dfs = function (node, arr, current) {
    if (!node.left && !node.right) {
      if (node.val + current === sum) {
        arr.push(node.val);
        result.push(arr);
        return;
      }
    } else {
      if (node.left) {
        tmp = arr.slice(0);
        tmp.push(node.val);
        dfs(node.left, tmp, node.val + current);
      }

      if (node.right) {
        tmp = arr.slice(0);
        tmp.push(node.val);
        dfs(node.right, tmp, node.val + current);
      }
    }
  };
  dfs(root, [], 0);

  return result;
};

var root = {
  val  : 5,
  left : {
    val  : 4,
    left : {
      val  : 11,
      left : {
        val   : 7,
        left  : null,
        right : null
      },
      right : {
        val   : 2,
        left  : null,
        right : null
      }
    },
    right : null
  },
  right : {
    val  : 8,
    left : {
      val   : 13,
      left  : null,
      right : null
    },
    right : {
      val  : 4,
      left : {
        val   : 5,
        left  : null,
        right : null,
      },
      right : {
        val   : 1, 
        left  : null,
        right : null
      }
    }
  }
};

var root2 = {
  val  : 1,
  left : {
    val   : 2,
    left  : null,
    right : null
  },
  right : null
};

console.log(pathSum(root, 22));
console.log(pathSum(root2, 1));