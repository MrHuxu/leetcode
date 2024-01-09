use std::cmp;

pub struct Solution;

impl Solution {
    pub fn min_cost(houses: Vec<i32>, cost: Vec<Vec<i32>>, m: i32, n: i32, target: i32) -> i32 {
        let mut dp = vec![vec![vec![(0, 0); (n + 1) as usize]]; (m + 1) as usize];

        let mut ret = 0;
        for tmp in &dp[m as usize][n as usize] {
            ret = match tmp.0 {
                target => match ret {
                    0 => tmp.1,
                    _ => cmp::min(ret, tmp.1),
                },
                _ => continue,
            }
        }

        ret
    }
}

#[test]
fn test() {
    assert_eq!(
        9,
        Solution::min_cost(
            vec![0, 0, 0, 0, 0],
            vec![
                vec![1, 10],
                vec![10, 1],
                vec![10, 1],
                vec![1, 10],
                vec![5, 1]
            ],
            5,
            2,
            3
        )
    );
}
