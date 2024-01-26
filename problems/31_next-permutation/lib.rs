struct Solution;

impl Solution {
    pub fn next_permutation(nums: &mut Vec<i32>) {
        let mut adjusted = false;

        for i in (0..nums.len()).rev() {
            let mut min_bigger_idx = None;
            for j in i + 1..nums.len() {
                if nums[j] <= nums[i] {
                    continue;
                }

                if let Some(idx) = min_bigger_idx {
                    if nums[idx] > nums[j] {
                        min_bigger_idx = Some(j);
                    }
                } else {
                    min_bigger_idx = Some(j);
                }
            }

            if let Some(idx) = min_bigger_idx {
                let tmp = nums[i];
                nums[i] = nums[idx];
                nums[idx] = tmp;

                nums[i + 1..].sort();

                adjusted = true;
                break;
            }
        }

        if !adjusted {
            nums.sort()
        }
    }
}

#[test]
fn it_works() {
    let mut nums = vec![1, 2, 3];
    Solution::next_permutation(&mut nums);
    assert_eq!(nums, vec![1, 3, 2]);

    nums = vec![3, 2, 1];
    Solution::next_permutation(&mut nums);
    assert_eq!(nums, vec![1, 2, 3]);

    nums = vec![1, 1, 5];
    Solution::next_permutation(&mut nums);
    assert_eq!(nums, vec![1, 5, 1]);
}
