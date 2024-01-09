struct Solution;

use std::cmp::max;

impl Solution {
    pub fn max_area(height: Vec<i32>) -> i32 {
        let mut ret = 0;

        let mut left = 0;
        let mut right = height.len() - 1;
        while left < right {
            if height[left] < height[right] {
                ret = max(ret, height[left] * (right - left) as i32);
                left += 1;
            } else {
                ret = max(ret, height[right] * (right - left) as i32);
                right -= 1;
            }
        }

        ret
    }
}

#[test]
fn test() {
    assert_eq!(Solution::max_area(vec![1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
}
