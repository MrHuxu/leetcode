struct Solution;

use std::collections::HashMap;

impl<'a> Solution {
    pub fn ladder_length(begin_word: String, end_word: String, word_list: Vec<String>) -> i32 {
        if begin_word == end_word {
            return 1;
        }
        if !word_list.contains(&end_word) {
            return 0;
        }

        let mut conversion: HashMap<String, Vec<&String>> = HashMap::new();
        for word in word_list.iter() {
            for i in 0..word.len() {
                let mut s = word.clone();
                s.replace_range(i..i + 1, "*");
                match conversion.get_mut(&s) {
                    None => {
                        conversion.entry(s).or_insert(vec![word]);
                    }
                    Some(list) => {
                        list.push(word);
                    }
                }
            }
        }

        let mut queue: Vec<(&String, i32)> = vec![(&begin_word, 1)];
        let mut visited: HashMap<&String, bool> = HashMap::new();
        visited.insert(&begin_word, true);
        while queue.len() > 0 {
            let item = queue[0];
            if *item.0 == end_word {
                return item.1;
            }
            queue = queue[1..].to_vec();

            let next_words = Solution::get_next(item.0, &conversion);
            for word in next_words {
                if visited.contains_key(word) {
                    continue;
                }

                queue.push((word, item.1 + 1));
                visited.insert(word, true);
            }
        }

        0
    }

    fn get_next(word: &String, conversion: &HashMap<String, Vec<&'a String>>) -> Vec<&'a String> {
        let mut ret: Vec<&String> = Vec::new();
        for i in 0..word.len() {
            let mut s = word.clone();
            s.replace_range(i..i + 1, "*");
            if conversion.contains_key(&s) {
                ret = vec![ret, conversion.get(&s).unwrap().to_vec()].concat();
            }
        }

        ret
    }
}

fn main() {
    println!(
        "{}",
        Solution::ladder_length(
            String::from("hit"),
            String::from("cog"),
            vec![
                String::from("hot"),
                String::from("dot"),
                String::from("dog"),
                String::from("lot"),
                String::from("log"),
                String::from("cog")
            ]
        )
    );
    println!(
        "{}",
        Solution::ladder_length(
            String::from("hit"),
            String::from("cog"),
            vec![
                String::from("hot"),
                String::from("dot"),
                String::from("dog"),
                String::from("lot"),
                String::from("log")
            ]
        )
    );
    println!("Hello, world!");
}
