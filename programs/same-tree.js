/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  return !!((!p && !q) || (p && q && p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)));
};

const tree0 = null;

const tree1 = {
  val  : 1,
  left : {
    val : 2
  },
  right : {
    val : 3
  }
};
console.log(isSameTree(tree0, tree1));

const tree2 = {
  val  : 1,
  left : {
    val : 2
  },
  right : {
    val : 3
  }
};

const tree3 = {
  val  : 1, 
  left : {
    val : 3
  },
  right : {
    val : 2
  }
};
console.log(isSameTree(tree1, tree2));
console.log(isSameTree(tree1, tree3));