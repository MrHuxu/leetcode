struct Solution;

impl Solution {
    pub fn subsets(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut ret = vec![vec![]];

        if nums.len() == 0 {
            return ret;
        }

        for num in nums.iter() {
            let mut curr_set: Vec<Vec<i32>> = Vec::new();
            for pre_set in ret.iter() {
                let mut tmp = pre_set.clone();
                tmp.push(*num);
                curr_set.push(tmp);
            }
            ret = vec![ret, curr_set].concat();
        }

        ret
    }
}

fn main() {
    println!("{:?}", Solution::subsets(vec![1, 2, 3]));
    println!("{:?}", Solution::subsets(vec![0]));
    println!("Hello, world!");
}
