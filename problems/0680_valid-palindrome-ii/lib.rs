struct Solution;

impl Solution {
    pub fn valid_palindrome(s: String) -> bool {
        let bytes = s.as_bytes();

        let mut left = 0;
        let mut right = s.len() - 1;
        loop {
            if left >= right {
                return true;
            }

            if bytes[left] == bytes[right] {
                left += 1;
                right -= 1;
            } else {
                break;
            }
        }

        let mut new_left = left + 1;
        let mut new_right = right;
        loop {
            if new_left >= new_right {
                return true;
            }

            if bytes[new_left] == bytes[new_right] {
                new_left += 1;
                new_right -= 1;
            } else {
                break;
            }
        }

        let mut new_left = left;
        let mut new_right = right - 1;
        loop {
            if new_left >= new_right {
                return true;
            }

            if bytes[new_left] == bytes[new_right] {
                new_left += 1;
                new_right -= 1;
            } else {
                break;
            }
        }

        false
    }
}

#[test]
fn it_works() {
    assert_eq!(Solution::valid_palindrome(String::from("aba")), true);
    assert_eq!(Solution::valid_palindrome(String::from("abca")), true);
    assert_eq!(Solution::valid_palindrome(String::from("abc")), false);
}
