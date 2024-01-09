struct Solution;

use std::cmp::Ordering;

impl Solution {
    pub fn search(nums: Vec<i32>, target: i32) -> i32 {
        let mut left = 0;
        let mut right = nums.len() as i32 - 1;
        while left <= right {
            let mid = (left + right) / 2;
            match nums[mid as usize].cmp(&target) {
                Ordering::Equal => return mid,
                Ordering::Less => left = mid + 1,
                Ordering::Greater => right = mid - 1,
            }
        }
        -1
    }
}

#[test]
fn it_works() {
    assert_eq!(Solution::search(vec![5], 5), 0);
    assert_eq!(Solution::search(vec![2, 5], 0), -1);
    assert_eq!(Solution::search(vec![-1, 0, 3, 5, 9, 12], 9), 4);
    assert_eq!(Solution::search(vec![-1, 0, 3, 5, 9, 12], 2), -1);
}
