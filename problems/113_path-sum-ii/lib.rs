use std::vec;

struct MyCircularQueue {
    cap: usize,
    len: usize,
    data: Vec<i32>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MyCircularQueue {
    fn new(k: i32) -> Self {
        MyCircularQueue {
            cap: k as usize,
            len: 0,
            data: vec![0; k as usize],
        }
    }

    fn en_queue(&mut self, value: i32) -> bool {
        if (self.cap == self.len) {
            return false;
        }
    }

    fn de_queue(&self) -> bool {}

    fn front(&self) -> i32 {}

    fn rear(&self) -> i32 {}

    fn is_empty(&self) -> bool {}

    fn is_full(&self) -> bool {}
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * let obj = MyCircularQueue::new(k);
 * let ret_1: bool = obj.en_queue(value);
 * let ret_2: bool = obj.de_queue();
 * let ret_3: i32 = obj.front();
 * let ret_4: i32 = obj.rear();
 * let ret_5: bool = obj.is_empty();
 * let ret_6: bool = obj.is_full();
 */

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        let result = 2 + 2;
        assert_eq!(result, 4);
    }
}
