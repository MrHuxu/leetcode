struct Solution;

impl Solution {
    pub fn game_of_life(board: &mut Vec<Vec<i32>>) {
        let mut original_vals = vec![vec![0; board[0].len()]; board.len()];
        for i in 0..board.len() {
            for j in 0..board[0].len() {
                original_vals[i][j] = board[i][j];
                board[i][j] = Self::get_next(board, &original_vals, i, j);
            }
        }
    }

    fn get_next(board: &Vec<Vec<i32>>, original_vals: &Vec<Vec<i32>>, x: usize, y: usize) -> i32 {
        let cnt_1 = if x > 0 && y > 0 {
            original_vals[x - 1][y - 1]
        } else {
            0
        } + if x > 0 { original_vals[x - 1][y] } else { 0 }
            + if x > 0 && y < board[0].len() - 1 {
                original_vals[x - 1][y + 1]
            } else {
                0
            }
            + if y > 0 { original_vals[x][y - 1] } else { 0 }
            + if y < board[0].len() - 1 {
                board[x][y + 1]
            } else {
                0
            }
            + if x < board.len() - 1 && y > 0 {
                board[x + 1][y - 1]
            } else {
                0
            }
            + if x < board.len() - 1 {
                board[x + 1][y]
            } else {
                0
            }
            + if x < board.len() - 1 && y < board[0].len() - 1 {
                board[x + 1][y + 1]
            } else {
                0
            };

        if board[x][y] == 0 {
            if cnt_1 == 3 {
                1
            } else {
                0
            }
        } else {
            if cnt_1 == 2 || cnt_1 == 3 {
                1
            } else {
                0
            }
        }
    }
}

#[test]
fn it_works() {
    let mut board = vec![vec![0, 1, 0], vec![0, 0, 1], vec![1, 1, 1], vec![0, 0, 0]];
    Solution::game_of_life(&mut board);
    assert_eq!(
        board,
        vec![vec![0, 0, 0], vec![1, 0, 1], vec![0, 1, 1], vec![0, 1, 0]]
    );

    board = vec![vec![1, 1], vec![1, 0]];
    Solution::game_of_life(&mut board);
    assert_eq!(board, vec![vec![1, 1], vec![1, 1]]);
}
