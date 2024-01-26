struct Solution;

impl Solution {
    pub fn push_dominoes(dominoes: String) -> String {
        let mut pre_sums = vec![0; dominoes.len()];
        let bytes = dominoes.as_bytes();
        for (i, b) in bytes.iter().enumerate() {
            pre_sums[i] = match *b as char {
                'R' => 1,
                '.' => {
                    if i > 0 && pre_sums[i - 1] > 0 {
                        pre_sums[i - 1] + 1
                    } else {
                        0
                    }
                }
                _ => 0,
            }
        }

        let mut i = dominoes.len() - 1;
        while i >= 0 {
            if bytes[i] != b'L' {
                i -= 1;
                continue;
            }

            pre_sums[i] = -1;
            if i == 0 {
                i -= 1;
                continue;
            }

            if pre_sums[i - 1] == 0 {
                while i > 0 && bytes[i - 1] == b'.' {
                    pre_sums[i - 1] = -1;
                    i -= 1;
                }
                i -= 1;
            } else if pre_sums[i - 1] > 0 {
                let right_cnt = pre_sums[i - 1];
            }
        }

        String::from("")
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        let result = 2 + 2;
        assert_eq!(result, 4);
    }
}
