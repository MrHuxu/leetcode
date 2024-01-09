struct Solution;

impl Solution {
    pub fn count_orders(n: i32) -> i32 {
        let mut ret: i64 = 1;

        for i in 1..=n as i64 {
            // ret = ret * (i * 2 - 1 + 1) * (i * 2 - 1) / 2;
            ret = (ret * 2 * i * i - ret * i) % 1000000007;
        }

        ret as i32
    }
}

#[test]
fn test() {
    assert_eq!(Solution::count_orders(1), 1);
    assert_eq!(Solution::count_orders(2), 6);
    assert_eq!(Solution::count_orders(3), 90);
    assert_eq!(Solution::count_orders(8), 90);
}
