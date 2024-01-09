struct Solution;

impl Solution {
    pub fn shift_grid(grid: Vec<Vec<i32>>, k: i32) -> Vec<Vec<i32>> {
        let mut grid = grid;
        for _i in 0..k {
            let mut pre = grid[grid.len() - 1][grid[0].len() - 1];
            for i in 0..grid.len() {
                for j in 0..grid[0].len() {
                    let tmp = grid[i][j];
                    grid[i][j] = pre;
                    pre = tmp;
                }
            }
        }

        grid
    }
}

#[test]
fn it_works() {
    assert_eq!(
        Solution::shift_grid(
            vec![
                vec![3, 8, 1, 9],
                vec![19, 7, 2, 5],
                vec![4, 6, 11, 10],
                vec![12, 0, 21, 13]
            ],
            4
        ),
        vec![
            vec![12, 0, 21, 13],
            vec![3, 8, 1, 9],
            vec![19, 7, 2, 5],
            vec![4, 6, 11, 10]
        ]
    );
}
