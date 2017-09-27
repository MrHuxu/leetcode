/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
  let result = Number.MIN_SAFE_INTEGER, level = [root];
  while (level.length) {
    let i = 0, j = level.length - 1;
    while (j && !level[j]) --j;
    while (i < level.length && !level[i]) ++i;
    level = level.slice(i, j + 1);

    result = Math.max(result, level.length);

    const nextLevel = [];
    for (let node of level) {
      if (node) {
        nextLevel.push(node.left, node.right);
      } else {
        nextLevel.push(null, null);
      }
    }
    level = nextLevel;
  }

  return result;
};

const tree1 = {
  val  : 1,
  left : {
    val  : 3,
    left : {
      val : 5
    },
    right : {
      val : 3
    }
  },
  right : {
    val   : 2,
    right : {
      val : 9
    }
  }
};
console.log(widthOfBinaryTree(tree1));

const tree2 = {
  val  : 1,
  left : {
    val  : 3,
    left : {
      val : 5
    },
    right : {
      val : 3
    }
  }
};
console.log(widthOfBinaryTree(tree2));

const tree3 = {
  val  : 1,
  left : {
    val  : 3,
    left : {
      val : 5
    }
  },
  right : {
    val : 2
  }
};
console.log(widthOfBinaryTree(tree3));

const tree4 = {
  val  : 1,
  left : {
    val  : 3,
    left : {
      val  : 5,
      left : {
        val : 6
      }
    }
  },
  right : {
    val   : 2,
    right : {
      val   : 9,
      right : {
        val : 7
      }
    }
  }
};
console.log(widthOfBinaryTree(tree4));