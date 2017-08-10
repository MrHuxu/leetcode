/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function(root) {
  if (!root) return [];

  let height = 0;
  let arr = [root];
  while (arr.length) {
    ++height;
    arr = arr.reduce((prev, node) => {
      if (node.left) prev.push(node.left);
      if (node.right) prev.push(node.right);
      return prev;
    }, []);
  }

  const traverse = (node, depth) => {
    const val = node ? node.val.toString() : null;

    const l = depth === height ? [] : traverse(node ? node.left : null, depth + 1);
    const r = depth === height ? [] : traverse(node ? node.right : null, depth + 1);

    return [...l, { depth, val }, ...r];
  };

  const metadata = traverse(root, 1);
  let result = [];
  for (let i = 1; i <= height; ++i) {
    const tmp = metadata.map(d => (d.depth === i && d.val !== null) ? d.val : '');
    result.push(tmp);
  }
  return result;
};

const root3 = {
  val  : 1,
  left : {
    val  : 2,
    left : {
      val  : 3,
      left : {
        val : 4
      }
    }
  },
  right : {
    val : 5
  }
};
console.log(printTree(root3));

const root2 = {
  val  : 1,
  left : {
    val   : 2,
    right : {
      val : 4
    }
  },
  right : {
    val : 3
  }
};
console.log(printTree(root2));

const root1 = {
  val  : 1,
  left : {
    val : 2
  }
};
console.log(printTree(root1));