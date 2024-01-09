struct Solution;

impl Solution {
    pub fn sequential_digits(low: i32, high: i32) -> Vec<i32> {
        let mut tmp = low;
        let mut low_digits: Vec<i32> = Vec::new();
        while tmp > 0 {
            low_digits.push(tmp % 10);
            tmp = tmp / 10;
        }

        let mut min_len = low_digits.len();
        let mut first_digit = *low_digits.last().unwrap();
        if first_digit > 10 - min_len as i32 {
            min_len += 1;
            first_digit = 1;
        } else {
            for i in (0..low_digits.len() - 1).rev() {
                if low_digits[i] == low_digits[i + 1] + 1 {
                    continue;
                }

                if low_digits[i] < low_digits[i + 1] + 1 {
                    break;
                }

                first_digit = first_digit + 1;
                break;
            }
        }

        let mut ret: Vec<i32> = Vec::new();
        for len in min_len..10 {
            let mut first = 1;
            if len == min_len {
                first = first_digit;
            }

            let mut is_end = false;
            for i in first..10 - len as i32 + 1 {
                let mut tmp = i;
                for j in 1..len as i32 {
                    tmp = tmp * 10 + i + j
                }

                if tmp > high {
                    is_end = true;
                    break;
                }

                ret.push(tmp);
            }

            if is_end {
                break;
            }
        }

        ret
    }
}

fn main() {
    println!("{:?}", Solution::sequential_digits(58, 155));
    println!("Hello, world!");
}
