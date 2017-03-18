/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) return [];

  var row = [root], result = [];
  while (row.length) {
    var max = -Number.MAX_VALUE
    var nextRow = [];
    for (var i = 0; i < row.length; ++i) {
      max = Math.max(max, row[i].val);
      if (row[i].left) nextRow.push(row[i].left);
      if (row[i].right) nextRow.push(row[i].right);
    }
    result.push(max);
    row = nextRow;
  }
  return result;
};

var root2 = {
  val: 0,
  left: {
    val: -1
  }
};

console.log(largestValues(root2));

var root1 = {
  val: 1,
  left: {
    val: 3,
    left: {
      val: 5,
    },
    right: {
      val: 3
    }
  },
  right: {
    val: 2,
    right: {
      val: 9
    }
  }
};
console.log(largestValues(root1));
