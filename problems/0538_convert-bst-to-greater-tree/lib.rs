struct Solution;

// Definition for a binary tree node.
#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        TreeNode {
            val,
            left: None,
            right: None,
        }
    }
}

use std::cell::RefCell;
use std::rc::Rc;
impl Solution {
    pub fn convert_bst(root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        let (ret, _plus_val) = Self::helper(root.as_ref(), 0);
        ret
    }

    fn helper(
        root: Option<&Rc<RefCell<TreeNode>>>,
        plus_val: i32,
    ) -> (Option<Rc<RefCell<TreeNode>>>, i32) {
        if root.is_none() {
            return (None, 0);
        }

        let node = root.unwrap().borrow();
        let (right, right_plus_val) = Self::helper(node.right.as_ref(), plus_val);
        let (left, left_plus_val) =
            Self::helper(node.left.as_ref(), node.val + plus_val + right_plus_val);

        (
            Some(Rc::new(RefCell::new(TreeNode {
                val: node.val + plus_val + right_plus_val,
                left,
                right,
            }))),
            node.val + left_plus_val + right_plus_val,
        )
    }
}

#[test]
fn it_works() {
    assert_eq!(
        Solution::convert_bst(Some(Rc::new(RefCell::new(TreeNode {
            val: 0,
            left: None,
            right: Some(Rc::new(RefCell::new(TreeNode {
                val: 1,
                left: None,
                right: None
            })))
        })))),
        Some(Rc::new(RefCell::new(TreeNode {
            val: 1,
            left: None,
            right: Some(Rc::new(RefCell::new(TreeNode {
                val: 1,
                left: None,
                right: None
            })))
        })))
    );
}
