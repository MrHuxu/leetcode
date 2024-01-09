struct Solution;

impl Solution {
    pub fn is_toeplitz_matrix(matrix: Vec<Vec<i32>>) -> bool {
        if matrix.len() <= 1 || (matrix.len() > 0 && matrix[0].len() <= 1) {
            return true;
        }

        for i in 0..matrix[0].len() {
            let tmp = matrix[0][i];
            let mut j = 1;
            while i + j < matrix[0].len() && j < matrix.len() {
                if matrix[j][i + j] != tmp {
                    return false;
                }
                j += 1;
            }
        }
        for i in 1..matrix.len() {
            let tmp = matrix[i][0];
            let mut j = 1;
            while i + j < matrix.len() && j < matrix[0].len() {
                if matrix[i + j][j] != tmp {
                    return false;
                }
                j += 1;
            }
        }

        true
    }
}

#[test]
fn it_works() {
    assert!(Solution::is_toeplitz_matrix(vec![
        vec![1, 2, 3, 4],
        vec![5, 1, 2, 3],
        vec![9, 5, 1, 2]
    ]));
    assert!(!Solution::is_toeplitz_matrix(vec![vec![1, 2], vec![2, 2,]]));
}
