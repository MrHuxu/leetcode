struct Solution;

impl Solution {
    pub fn maximum69_number(num: i32) -> i32 {
        num + Self::helper(num, 0, 1)
    }

    fn helper(num: i32, pre_change: i32, base: i32) -> i32 {
        match num {
            0 => pre_change,
            _ => match num % 10 {
                9 => Self::helper(num / 10, pre_change, base * 10),
                _ => Self::helper(num / 10, 3 * base, base * 10),
            },
        }
    }
}

#[test]
fn it_works() {
    let result = 2 + 2;
    assert_eq!(result, 4);

    assert_eq!(Solution::maximum69_number(9669), 9969);
    assert_eq!(Solution::maximum69_number(9996), 9999);
    assert_eq!(Solution::maximum69_number(9999), 9999);
}
