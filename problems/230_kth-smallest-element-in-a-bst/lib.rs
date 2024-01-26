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
    pub fn kth_smallest(root: Option<Rc<RefCell<TreeNode>>>, k: i32) -> i32 {
        let mut vals = Vec::new();
        Self::helper(&mut vals, root.as_ref(), k as usize);
        vals[k as usize - 1]
    }

    fn helper(vals: &mut Vec<i32>, root: Option<&Rc<RefCell<TreeNode>>>, k: usize) {
        if root.is_none() || vals.len() >= k {
            return;
        }

        let node = root.unwrap().borrow();

        Self::helper(vals, node.left.as_ref(), k);
        if vals.len() >= k {
            return;
        }
        vals.push(node.val);
        Self::helper(vals, node.right.as_ref(), k);
    }
}

#[test]
fn it_works() {}
