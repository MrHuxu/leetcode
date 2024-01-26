struct Solution;

use std::collections::HashMap;

impl Solution {
    pub fn num_matching_subseq(s: String, words: Vec<String>) -> i32 {
        let mut visit: HashMap<String, Vec<usize>> = HashMap::new();
        for word in words.iter() {
            if let Some(val) = visit.get_mut(word) {
                val[1] += 1;
            } else {
                visit.insert(word.clone(), vec![0, 1]);
            }
        }

        let mut ret = 0;
        for i in 0..s.len() {
            let ch = s.as_bytes()[i];
            let mut deleted_keys = Vec::new();
            for (key, val) in visit.iter_mut() {
                if ch == key.as_bytes()[val[0]] {
                    val[0] += 1;
                }

                if val[0] == key.len() {
                    ret += val[1];
                    deleted_keys.push(key.clone());
                }
            }
            for key in deleted_keys.iter() {
                visit.remove(key);
            }
        }

        ret as i32
    }
}

#[test]
fn test() {
    assert_eq!(
        3,
        Solution::num_matching_subseq(
            String::from("abcde"),
            vec![
                String::from("a"),
                String::from("bb"),
                String::from("acd"),
                String::from("ace")
            ]
        )
    );
    assert_eq!(5, Solution::num_matching_subseq(String::from("rwpddkvbnnuglnagtvamxkqtwhqgwbqgfbvgkwyuqkdwhzudsxvjubjgloeofnpjqlkdsqvruvabjrikfwronbrdyyjnakstqjac"),
    vec![String::from("wpddkvbnn"),String::from("lnagtva"),String::from("kvbnnuglnagtvamxkqtwhqgwbqgfbvgkwyuqkdwhzudsxvju"),String::from("rwpddkvbnnugln"),String::from("gloeofnpjqlkdsqvruvabjrikfwronbrdyyj"),String::from("vbgeinupkvgmgxeaaiuiyojmoqkahwvbpwugdainxciedbdkos"),String::from("mspuhbykmmumtveoighlcgpcapzczomshiblnvhjzqjlfkpina"),String::from("rgmliajkiknongrofpugfgajedxicdhxinzjakwnifvxwlokip"),String::from("fhepktaipapyrbylskxddypwmuuxyoivcewzrdwwlrlhqwzikq"),String::from("qatithxifaaiwyszlkgoljzkkweqkjjzvymedvclfxwcezqebx")]));
}
