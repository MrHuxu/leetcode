struct Solution;

use std::cmp::max;
use std::collections::HashMap;

impl Solution {
    pub fn min_domino_rotations(tops: Vec<i32>, bottoms: Vec<i32>) -> i32 {
        let len = tops.len() as i32;
        let mut num1 = Some(tops[0]);
        let mut num2 = Some(bottoms[0]);
        let mut top_cnt = HashMap::new();
        let mut bottom_cnt = HashMap::new();

        for i in 0..len as usize {
            if num1.is_none() && num2.is_none() {
                break;
            }

            if num1.is_some() && num2.is_some() && num1.unwrap() == num2.unwrap() {
                num2 = None;
            }

            if let Some(val) = num1 {
                if val == tops[i] {
                    let cnt = top_cnt.entry(val).or_insert(0);
                    *cnt += 1;
                }
                if val == bottoms[i] {
                    let cnt = bottom_cnt.entry(val).or_insert(0);
                    *cnt += 1;
                }
                if val != tops[i] && val != bottoms[i] {
                    num1 = None;
                }
            }

            if let Some(val) = num2 {
                if val == tops[i] {
                    let cnt = top_cnt.entry(val).or_insert(0);
                    *cnt += 1;
                }
                if val == bottoms[i] {
                    let cnt = bottom_cnt.entry(val).or_insert(0);
                    *cnt += 1;
                }
                if val != tops[i] && val != bottoms[i] {
                    num2 = None;
                }
            }
        }

        match (num1, num2) {
            (None, None) => -1,
            (Some(val), None) => {
                len - max(top_cnt.get(&val).unwrap(), bottom_cnt.get(&val).unwrap())
            }
            (None, Some(val)) => {
                len - max(top_cnt.get(&val).unwrap(), bottom_cnt.get(&val).unwrap())
            }
            (Some(val1), Some(val2)) => {
                len - max(
                    max(top_cnt.get(&val1).unwrap(), bottom_cnt.get(&val1).unwrap()),
                    max(top_cnt.get(&val2).unwrap(), bottom_cnt.get(&val2).unwrap()),
                )
            }
        }
    }
}

#[test]
fn it_works() {
    // assert_eq!(
    //     Solution::min_domino_rotations(vec![2, 1, 2, 4, 2, 2], vec![5, 2, 6, 2, 3, 2]),
    //     2
    // );
    // assert_eq!(
    //     Solution::min_domino_rotations(vec![3, 5, 1, 2, 3], vec![3, 6, 3, 3, 4]),
    //     -1
    // );
    assert_eq!(
        Solution::min_domino_rotations(vec![1, 1, 1, 1, 1, 1, 1, 1], vec![1, 1, 1, 1, 1, 1, 1, 1]),
        0
    );
}
