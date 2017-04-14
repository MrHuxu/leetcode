/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
  var sum = 0;

  var traverse = function (node) {
    if (!node) return null;

    traverse(node.right);
    node.val += sum;
    sum = node.val;
    traverse(node.left);

    return node;
  };
  traverse(root);

  return root;
};

let node = {
  val: 5,
  left: {
    val: 2
  },
  right: {
    val: 13
  }
};
console.log(convertBST(node));
[2,0,3,-4,1]
let node2 = {
  val: 2,
  left: {
    val: 0,
    left: {
      val: -4
    },
    right: {
      val: 1
    }
  },
  right: {
    val: 3
  }
};
console.log(convertBST(node2))

let node3 = {
  val: 1,
  left: {
    val: 0,
    left: {
      val: -2
    }
  },
  right: {
    val: 4,
    left: {
      val: 3
    }
  }
};
console.log(convertBST(node3));
