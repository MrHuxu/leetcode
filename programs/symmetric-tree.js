/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true;

  const compare = (l, r) => {
    return (!l && !r) || ((l && r) && l.val === r.val && compare(l.left, r.right) && compare(l.right, r.left));
  };

  return !!compare(root.left, root.right);
};

var root1 = {
  val  : 1,
  left : {
    val  : 2,
    left : {
      val : 3,
    },
    right : {
      val : 4,
    }
  },
  right : {
    val  : 2,
    left : {
      val : 4,
    },
    right : {
      val : 3,
    }
  }
};
console.log(isSymmetric(root1));

var root2 = {
  val  : 1,
  left : {
    val   : 2,
    right : {
      val : 3,
    }
  },
  right : {
    val   : 2,
    right : {
      val : 3,
    }
  }
};

console.log(isSymmetric(root2));