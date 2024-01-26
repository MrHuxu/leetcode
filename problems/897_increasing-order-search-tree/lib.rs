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
    pub fn increasing_bst(root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        let vals = Self::traverse(root.as_ref());
        Self::build(vals)
    }

    fn traverse(root: Option<&Rc<RefCell<TreeNode>>>) -> Vec<i32> {
        if root.is_none() {
            return vec![];
        }

        let node = root.unwrap().borrow();
        vec![
            Self::traverse(node.left.as_ref()),
            vec![node.val],
            Self::traverse(node.right.as_ref()),
        ]
        .concat()
    }

    fn build(vals: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
        if vals.is_empty() {
            return None;
        }

        Some(Rc::new(RefCell::new(TreeNode {
            val: vals[0],
            left: None,
            right: Self::build(vals[1..].to_vec()),
        })))
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        let result = 2 + 2;
        assert_eq!(result, 4);
    }
}
