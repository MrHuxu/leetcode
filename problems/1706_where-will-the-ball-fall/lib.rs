struct Solution;

impl Solution {
    pub fn find_ball(grid: Vec<Vec<i32>>) -> Vec<i32> {
        if grid.len() == 0 {
            return vec![];
        }

        let mut ret = vec![-1; grid[0].len()];

        let mut visited = vec![vec![0 as i32; grid[0].len()]; grid.len()];
        for i in 0..grid[0].len() {
            let mut pre_idx = i;
            let mut paths: Vec<Vec<usize>> = Vec::new();
            let mut stopped = false;
            for j in 0..grid.len() {
                paths.push(vec![j, pre_idx]);

                match visited[j][pre_idx] {
                    -1 => {
                        stopped = true;
                        break;
                    }
                    1 => {
                        pre_idx = visited[j][pre_idx] as usize;
                        break;
                    }
                    _ => {}
                }

                if grid[j][pre_idx] == 1 && pre_idx < grid[0].len() - 1 && grid[j][pre_idx + 1] == 1
                {
                    pre_idx += 1;
                } else if grid[j][pre_idx] == -1 && pre_idx > 0 && grid[j][pre_idx - 1] == -1 {
                    pre_idx -= 1;
                } else {
                    stopped = true;
                    break;
                }
            }

            if !stopped {
                ret[i] = pre_idx as i32;
            }

            for path in paths.iter() {
                visited[path[0]][path[1]] = ret[i];
            }
        }

        ret
    }
}

#[test]
fn it_works() {
    println!(
        "{:?}",
        Solution::find_ball(vec![
            vec![1, 1, 1, 1, 1, 1],
            vec![-1, -1, -1, -1, -1, -1],
            vec![1, 1, 1, 1, 1, 1],
            vec![-1, -1, -1, -1, -1, -1]
        ])
    )
}
