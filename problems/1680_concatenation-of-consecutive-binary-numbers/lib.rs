struct Solution;

impl Solution {
    pub fn concatenated_binary(n: i32) -> i32 {
        let mut ret: i64 = 0;
        for i in 1..=n as i64 {
            let bit_cnt = Self::count_bin_bits(i);
            ret = ((ret << bit_cnt) | i) % 1000000007;
        }
        ret as i32
    }

    fn count_bin_bits(n: i64) -> i64 {
        let mut n = n;
        let mut cnt = 0;
        while n != 0 {
            cnt += 1;
            n /= 2;
        }
        cnt
    }
}

#[test]
fn it_works() {
    assert_eq!(Solution::concatenated_binary(1), 1);
    assert_eq!(Solution::concatenated_binary(3), 27);
    assert_eq!(Solution::concatenated_binary(12), 505379714);
}
