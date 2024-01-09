use std::cmp;

struct Solution;

impl Solution {
    pub fn cherry_pickup(grid: Vec<Vec<i32>>) -> i32 {
        let m = grid.len();
        let n = grid[0].len();
        let mut dp = vec![vec![vec![0; n]; n]; m];

        for row in (0..m).rev() {
            for col1 in 0..n {
                for col2 in 0..n {
                    let mut result = grid[row][col1];

                    if col1 != col2 {
                        result += grid[row][col2];
                    }

                    if row != m - 1 {
                        let mut tmp = 0;

                        for new_col1 in col1 as i32 - 1..col1 as i32 + 2 {
                            for new_col2 in col2 as i32 - 1..col2 as i32 + 2 {
                                if new_col1 >= 0
                                    && new_col1 < (n as i32)
                                    && new_col2 >= 0
                                    && new_col2 < (n as i32)
                                {
                                    tmp = cmp::max(
                                        tmp,
                                        dp[row + 1][new_col1 as usize][new_col2 as usize],
                                    );
                                }
                            }
                        }

                        result += tmp;
                    }

                    dp[row][col1][col2] = result;
                }
            }
        }

        dp[0][0][n - 1]
    }
}

fn main() {
    println!(
        "{}",
        Solution::cherry_pickup(vec![
            vec![3, 1, 1],
            vec![2, 5, 1],
            vec![1, 5, 5],
            vec![2, 1, 1]
        ])
    );
    println!("Hello, world!");
}
