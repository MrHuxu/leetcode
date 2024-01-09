struct Solution;

impl Solution {
    pub fn remove_covered_intervals(intervals: Vec<Vec<i32>>) -> i32 {
        let mut intervals = intervals;
        intervals.sort_by(|a, b| {
            if a[0] != b[0] {
                a[0].cmp(&b[0])
            } else {
                b[1].cmp(&a[1])
            }
        });

        let mut ret = intervals.len();
        let mut max_right = intervals[0][1];
        for interval in intervals[1..].iter() {
            if interval[1] <= max_right {
                ret -= 1;
            } else {
                max_right = interval[1];
            }
        }

        ret as i32
    }
}

#[test]
fn test() {
    assert_eq!(
        Solution::remove_covered_intervals(vec![vec![1, 4], vec![3, 6], vec![2, 8]]),
        2
    );
    assert_eq!(
        Solution::remove_covered_intervals(vec![vec![1, 2], vec![1, 4], vec![3, 4]]),
        1
    );
}
