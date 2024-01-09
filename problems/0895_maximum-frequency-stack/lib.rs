use std::cmp::max;
use std::collections::HashMap;

struct FreqStack {
    stacks: Vec<Vec<i32>>,
    val_freq: HashMap<i32, usize>,
    max_freq: usize,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl FreqStack {
    fn new() -> Self {
        FreqStack {
            stacks: Vec::new(),
            val_freq: HashMap::new(),
            max_freq: 0,
        }
    }

    fn push(&mut self, val: i32) {
        let cnt = self.val_freq.entry(val).or_insert(0);
        *cnt += 1;

        if *cnt <= self.max_freq {
            self.stacks[*cnt - 1].push(val);
            return;
        }

        self.stacks.push(vec![val]);
        self.max_freq = *cnt;
    }

    fn pop(&mut self) -> i32 {
        let idx = self.max_freq - 1;
        let val = self.stacks[idx].pop().unwrap();

        if self.stacks[idx].is_empty() {
            self.max_freq -= 1;
            self.stacks.pop();
        }

        self.val_freq.entry(val).and_modify(|v| *v -= 1);
        val
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * let obj = FreqStack::new();
 * obj.push(val);
 * let ret_2: i32 = obj.pop();
 */

#[test]
fn it_works() {
    let mut fs = FreqStack::new();
    fs.push(4);
    fs.push(0);
    fs.push(9);
    fs.push(3);
    fs.push(4);
    fs.push(2);
    assert_eq!(fs.pop(), 4);
    fs.push(6);
    assert_eq!(fs.pop(), 6);
    fs.push(1);
    assert_eq!(fs.pop(), 1);
    fs.push(1);
    assert_eq!(fs.pop(), 1);
    fs.push(4);
    assert_eq!(fs.pop(), 4);
    assert_eq!(fs.pop(), 2);
    assert_eq!(fs.pop(), 3);
    assert_eq!(fs.pop(), 9);
    assert_eq!(fs.pop(), 0);
    assert_eq!(fs.pop(), 4);
}
