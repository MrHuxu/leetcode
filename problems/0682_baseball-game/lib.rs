struct Solution;

impl Solution {
    pub fn cal_points(ops: Vec<String>) -> i32 {
        let mut stack: Vec<i32> = Vec::new();

        for op in ops {
            match op.as_str() {
                "+" => {
                    let sum = stack[stack.len() - 1] + stack[stack.len() - 2];
                    stack.push(sum);
                }
                "D" => {
                    let len = stack.len();
                    stack.push(stack[len - 1] * 2);
                }
                "C" => {
                    stack.pop();
                }
                _ => {
                    stack.push(op.parse().unwrap());
                }
            }
        }

        let mut ret = 0;
        for num in stack {
            ret += num;
        }
        ret
    }
}

#[test]
fn it_works() {
    assert_eq!(
        Solution::cal_points(vec![
            String::from("5"),
            String::from("2"),
            String::from("C"),
            String::from("D"),
            String::from("+")
        ]),
        30
    );
    assert_eq!(
        Solution::cal_points(vec![
            String::from("5"),
            String::from("-2"),
            String::from("4"),
            String::from("C"),
            String::from("D"),
            String::from("9"),
            String::from("+"),
            String::from("+")
        ]),
        27
    );
}
