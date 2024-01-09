struct Solution;

impl Solution {
    pub fn reverse_string(s: &mut Vec<char>) {
        let mut front = 0;
        let mut tail = s.len() - 1;
        while front < tail {
            let tmp = s[front];
            s[front] = s[tail];
            s[tail] = tmp;

            front += 1;
            tail -= 1;
        }
    }
}

#[test]
fn it_works() {
    let mut s = vec!['h', 'e', 'l', 'l', 'o'];
    Solution::reverse_string(&mut s);
    assert_eq!(s, vec!['o', 'l', 'l', 'e', 'h']);
}
