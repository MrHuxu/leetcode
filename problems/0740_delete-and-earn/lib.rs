struct Solution;

use std::cmp;

impl Solution {
    pub fn delete_and_earn(nums: Vec<i32>) -> i32 {
        let mut max_num = 0;
        let mut dp = vec![0; 10001];
        for num in nums.iter() {
            dp[*num as usize] += *num;
            max_num = cmp::max(max_num, *num);
        }

        for i in 1..=max_num as usize {
            dp[i] = match i {
                1 => dp[i],
                2 => cmp::max(dp[i - 1], dp[i]),
                _ => cmp::max(dp[i - 1], dp[i - 2] + dp[i]),
            };
        }

        dp[max_num as usize]
    }
}

#[test]
fn test() {
    assert_eq!(Solution::delete_and_earn(vec![3, 4, 2]), 6);
    assert_eq!(Solution::delete_and_earn(vec![2, 2, 3, 3, 3, 4]), 9);
}
