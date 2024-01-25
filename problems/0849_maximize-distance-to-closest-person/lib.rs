use std::cmp;

struct Solution;

impl Solution {
    pub fn max_dist_to_closest(seats: Vec<i32>) -> i32 {
        let mut pre_pos: Option<usize> = None;

        let mut ret = 0;
        for i in 0..seats.len() {
            match seats[i] {
                0 => {
                    if i == seats.len() - 1 {
                        ret = cmp::max(ret, (i - pre_pos.unwrap()) as i32);
                    }
                }
                _ => {
                    match pre_pos {
                        None => {
                            ret = i as i32;
                        }
                        Some(pre_pos_val) => {
                            ret = cmp::max(ret, ((i - pre_pos_val) / 2) as i32);
                        }
                    }

                    pre_pos = Some(i);
                }
            }
        }

        ret
    }
}

fn main() {
    println!("Hello, world!");
}
