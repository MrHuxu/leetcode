
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  const traverse = (src1, src2, dist) => {
    const num1 = null === src1 ? 0 : src1.val;
    const num2 = null === src2 ? 0 : src2.val;
    dist.val = num1 + num2;

    if ((src1 && src1.left !== null) || (src2 && src2.left !== null)) {
      dist.left = new TreeNode(null);
      traverse((src1 && src1.left), (src2 && src2.left), dist.left);
    }

    if ((src1 && src1.right !== null) || (src2 && src2.right !== null)) {
      dist.right = new TreeNode(null);
      traverse((src1 && src1.right), (src2 && src2.right), dist.right);
    }

    return dist;
  };

  if (!t1 && !t2) return null;
  return traverse(t1, t2, new TreeNode(null));
};

const t3 = {
  val  : 1,
  left : {
    val  : 2,
    left : {
      val   : 3,
      left  : null,
      right : null
    },
    right : null
  },
  right : null
};
const t4 = {
  val   : 1,
  left  : null,
  right : {
    val   : 2,
    left  : null,
    right : {
      val   : 3,
      left  : null,
      right : null
    }
  }
};
console.log(mergeTrees(t3, t4));

const t1 = {
  val  : 1,
  left : {
    val  : 3,
    left : {
      val   : 5,
      left  : null,
      right : null
    },
    right : null
  },
  right : {
    val   : 2,
    left  : null,
    right : null
  }
};

const t2 = {
  val  : 2,
  left : {
    val   : 1,
    left  : null,
    right : {
      val   : 4,
      left  : null,
      right : null
    }
  },
  right : {
    val   : 3,
    left  : null,
    right : {
      val   : 7,
      left  : null,
      right : null
    }
  }
};
console.log(mergeTrees(t1, t2));