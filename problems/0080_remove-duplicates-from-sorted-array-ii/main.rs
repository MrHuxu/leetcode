struct Solution;

impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        let mut slow = 0;
        let mut fast = 0;
        while fast < nums.len() {
            let mut tmp = fast;
            while tmp < nums.len() && nums[tmp] == nums[slow] {
                tmp += 1;
            }
            if tmp == fast + 1 {
                slow += 1;
            } else {
                nums[slow + 1] = nums[slow];
                slow += 2;
            }

            if tmp < nums.len() {
                nums[slow] = nums[tmp];
            }

            fast = tmp;
        }

        slow as i32
    }
}

fn main() {
    let mut nums = vec![1, 1, 1, 2, 2, 3];
    println!("{}", Solution::remove_duplicates(&mut nums));
    println!("{:?}", nums);
    nums = vec![0, 0, 1, 1, 1, 1, 2, 3, 3];
    println!("{}", Solution::remove_duplicates(&mut nums));
    println!("{:?}", nums);
    println!("Hello, world!");
}
