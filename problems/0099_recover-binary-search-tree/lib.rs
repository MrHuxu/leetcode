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
use std::mem::swap;
use std::rc::Rc;
impl Solution {
    pub fn recover_tree(root: &mut Option<Rc<RefCell<TreeNode>>>) {
        if root.is_none() {
            return;
        }

        let (mut first, mut second, mut prev) = (None, None, None);
        Self::traverse(root, &mut first, &mut second, &mut prev);

        swap(
            &mut first.unwrap().borrow_mut().val,
            &mut second.unwrap().borrow_mut().val,
        )
    }

    fn traverse(
        node: &Option<Rc<RefCell<TreeNode>>>,
        first: &mut Option<Rc<RefCell<TreeNode>>>,
        second: &mut Option<Rc<RefCell<TreeNode>>>,
        prev: &mut Option<Rc<RefCell<TreeNode>>>,
    ) {
        if let Some(curr_node) = node {
            let node_ref = curr_node.as_ref().borrow();
            Self::traverse(&node_ref.left, first, second, prev);
            if let Some(prev_node) = prev {
                if prev_node.as_ref().borrow().val >= node_ref.val {
                    if first.is_none() {
                        *first = Some(prev_node.clone());
                    }
                    *second = Some(curr_node.clone());
                }
            }
            *prev = Some(curr_node.clone());
            Self::traverse(&node_ref.right, first, second, prev);
        }
    }
}

#[test]
fn it_works() {
}
