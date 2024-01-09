use std::cell::RefCell;
use std::rc::Rc;

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

pub struct Solution;
impl Solution {
    pub fn right_side_view(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
        match root {
            Some(node) => Self::helper(vec![node]),
            _ => vec![],
        }
    }

    fn helper(nodes: Vec<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
        let mut last_val = 0;
        if let Some(node) = nodes.last() {
            last_val = node.borrow().val;
        } else {
            return vec![];
        }

        let mut next_level = Vec::new();
        for node in nodes {
            if let Some(left) = node.borrow().left.as_ref() {
                next_level.push(left.clone());
            }

            if let Some(right) = node.borrow().right.as_ref() {
                next_level.push(right.clone());
            }
        }

        vec![vec![last_val], Self::helper(next_level)].concat()
    }
}

#[test]
fn test() {
    let result = 2 + 2;
    assert_eq!(result, 4);
}
