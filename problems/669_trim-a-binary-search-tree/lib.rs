struct Solution;

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

use std::{cell::RefCell, rc::Rc};
impl Solution {
    pub fn trim_bst(
        root: Option<Rc<RefCell<TreeNode>>>,
        low: i32,
        high: i32,
    ) -> Option<Rc<RefCell<TreeNode>>> {
        Self::helper(root.as_ref(), low, high)
    }

    fn helper(
        root: Option<&Rc<RefCell<TreeNode>>>,
        low: i32,
        high: i32,
    ) -> Option<Rc<RefCell<TreeNode>>> {
        root?;

        let node = root.as_ref().unwrap().borrow();
        if node.val < low {
            return Self::helper(node.right.as_ref(), low, high);
        }
        if node.val > high {
            return Self::helper(node.left.as_ref(), low, high);
        }

        Some(Rc::new(RefCell::new(TreeNode {
            val: node.val,
            left: Self::helper(node.left.as_ref(), low, high),
            right: Self::helper(node.right.as_ref(), low, high),
        })))
    }
}

#[test]
fn it_works() {
}
