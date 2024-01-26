struct Solution;

use std::collections::HashMap;
impl Solution {
    pub fn equations_possible(equations: Vec<String>) -> bool {
        let mut equations = equations;
        equations.sort_by(|a, b| b.as_bytes()[1].cmp(&a.as_bytes()[1]));

        let mut map_ch_to_value: HashMap<u8, i32> = HashMap::new();
        let mut value = 0;
        for str in equations.iter() {
            let bytes = str.as_bytes();
            let ch1 = bytes[0];
            let ch2 = bytes[3];
            let op = bytes[1];

            if op == '=' as u8 {
                match (
                    map_ch_to_value.get(&ch1).copied(),
                    map_ch_to_value.get(&ch2).copied(),
                ) {
                    (Some(val1), Some(val2)) => {
                        for (_, v) in map_ch_to_value.iter_mut() {
                            if *v == val1 {
                                *v = val2;
                            }
                        }
                    }
                    (Some(val), None) => {
                        map_ch_to_value.insert(ch2, val);
                    }
                    (None, Some(val)) => {
                        map_ch_to_value.insert(ch1, val);
                    }
                    (None, None) => {
                        value += 1;
                        map_ch_to_value.insert(ch1, value);
                        map_ch_to_value.insert(ch2, value);
                    }
                }
                continue;
            }

            let val1 = match map_ch_to_value.get(&ch1) {
                Some(tmp) => *tmp,
                None => {
                    value += 1;
                    map_ch_to_value.insert(ch1, value);

                    value
                }
            };

            match map_ch_to_value.get(&ch2) {
                Some(tmp) => {
                    if *tmp == val1 {
                        return false;
                    }
                }
                None => {
                    value += 1;
                    map_ch_to_value.insert(ch2, value);
                }
            }
        }

        true
    }
}

#[test]
fn it_works() {
    assert!(Solution::equations_possible(vec![
        String::from("a==b"),
        String::from("b==a")
    ]));
    assert!(!Solution::equations_possible(vec![
        String::from("a==b"),
        String::from("b!=a")
    ]));
    assert!(!Solution::equations_possible(vec![
        String::from("a==b"),
        String::from("b!=c"),
        String::from("c==a")
    ]));
    assert!(Solution::equations_possible(vec![
        String::from("c==c"),
        String::from("f!=a"),
        String::from("f==b"),
        String::from("b==c")
    ]));
    assert!(!Solution::equations_possible(vec![
        String::from("a==b"),
        String::from("e==c"),
        String::from("b==c"),
        String::from("a!=e")
    ]));
}
