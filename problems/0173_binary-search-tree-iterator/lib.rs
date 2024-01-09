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

struct BSTIterator {
    idx: usize,
    vals: Vec<i32>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl BSTIterator {
    fn new(root: Option<Rc<RefCell<TreeNode>>>) -> Self {
        BSTIterator {
            idx: 0,
            vals: Self::traverse(root.as_ref()),
        }
    }

    fn traverse(root: Option<&Rc<RefCell<TreeNode>>>) -> Vec<i32> {
        if let Some(node) = root.as_ref() {
            let borrowed_node = node.borrow();
            vec![
                Self::traverse(borrowed_node.left.as_ref()),
                vec![borrowed_node.val],
                Self::traverse(borrowed_node.right.as_ref()),
            ]
            .concat()
        } else {
            vec![]
        }
    }

    fn next(&mut self) -> i32 {
        let ret = self.vals[self.idx];
        self.idx += 1;
        ret
    }

    fn has_next(&self) -> bool {
        self.idx < self.vals.len()
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * let obj = BSTIterator::new(root);
 * let ret_1: i32 = obj.next();
 * let ret_2: bool = obj.has_next();
 */

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        let result = 2 + 2;
        assert_eq!(result, 4);
    }
}
