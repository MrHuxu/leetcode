struct Solution;

impl Solution {
    pub fn make_good(s: String) -> String {
        let mut stack: Vec<u8> = Vec::new();

        for ch in s.as_bytes() {
            match stack.last() {
                Some(c) => match ch + 32 == *c || *ch == c + 32 {
                    true => {
                        stack.pop();
                    }
                    false => stack.push(*ch),
                },
                None => stack.push(*ch),
            }
        }

        String::from_utf8_lossy(&stack).to_string()
    }
}

#[test]
fn it_works() {
    let result = 2 + 2;
    assert_eq!(result, 4);

    assert_eq!(
        Solution::make_good(String::from("leEeetcode")),
        String::from("leetcode")
    );

    assert_eq!(
        Solution::make_good(String::from("abBAcC")),
        String::from("")
    );

    assert_eq!(Solution::make_good(String::from("Pp")), String::from(""));
}
