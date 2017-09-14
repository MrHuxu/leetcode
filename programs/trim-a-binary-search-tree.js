/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
  if (!root) return root;

  root.left = (root.left && trimBST(root.left, L, R)) || null;
  root.right = (root.right && trimBST(root.right, L, R)) || null;

  if (root.val < L) {
    root = root.right;
  } else if (root.val > R) {
    root = root.left;
  }

  return root;
};

const tree1 = {
  val  : 1,
  left : {
    val : 0
  },
  right : {
    val : 2
  }
};
console.log(trimBST(tree1, 1, 2));

const tree2 = {
  val  : 3,
  left : {
    val   : 0,
    right : {
      val  : 2,
      left : {
        val : 1
      }
    }
  },
  right : {
    val : 4
  }
};
console.log(trimBST(tree2, 1, 3));