use std::{cmp, collections::VecDeque};

struct Solution;

impl Solution {
    pub fn find_cheapest_price(n: i32, flights: Vec<Vec<i32>>, src: i32, dst: i32, k: i32) -> i32 {
        let n = n as usize;
        let mut adj = vec![vec![-1; n]; n];
        for f in flights {
            adj[f[0] as usize][f[1] as usize] = f[2]
        }
        let mut ret = -1;
        let mut visited = vec![-1; n];
        let mut queue = VecDeque::new();
        queue.push_back((src, 0, 0));
        while let Some((cur, dis, stop)) = queue.pop_front() {
            if cur == dst {
                ret = if ret == -1 { dis } else { cmp::min(ret, dis) }
            } else if stop <= k {
                for next in 0..n {
                    if adj[cur as usize][next] == -1 {
                        continue;
                    }
                    let cost = dis + adj[cur as usize][next];
                    if visited[next] != -1 && visited[next] < cost {
                        continue;
                    }

                    visited[next] = cost;
                    queue.push_back((next as i32, cost, stop + 1))
                }
            }
        }
        ret
    }
}

#[cfg(test)]
mod tests {
    use crate::Solution;

    #[test]
    fn it_works() {
        assert_eq!(
            Solution::find_cheapest_price(
                4,
                vec![
                    vec![0, 1, 100],
                    vec![1, 2, 100],
                    vec![2, 0, 100],
                    vec![1, 3, 600],
                    vec![2, 3, 200]
                ],
                0,
                3,
                1
            ),
            700
        )
    }
}
