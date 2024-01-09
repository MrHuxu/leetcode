struct Solution;

use std::collections::HashMap;

impl Solution {
    pub fn max_ice_cream(costs: Vec<i32>, coins: i32) -> i32 {
        let mut cnt = HashMap::new();
        let mut useful_costs = Vec::new();
        for cost in costs {
            if cost > coins {
                continue;
            }

            if !cnt.contains_key(&cost) {
                useful_costs.insert(0, cost);
            }

            *cnt.entry(cost).or_insert(0) += 1;
        }
        useful_costs.sort();

        let mut res = 0;
        let mut coins = coins;
        for cost in useful_costs {
            if coins < cost {
                break;
            }

            if coins <= cost * cnt.get(&cost).unwrap() {
                res += coins / cost;
                break;
            }

            res += cnt.get(&cost).unwrap();
            coins -= cost * cnt.get(&cost).unwrap();
        }

        res
    }
}

#[cfg(test)]
mod tests {
    use crate::Solution;

    #[test]
    fn it_works() {
        assert_eq!(Solution::max_ice_cream(vec![1, 3, 2, 4, 1], 7), 4);
    }
}
