struct MyHashMap {
    vals: Vec<i32>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MyHashMap {
    fn new() -> Self {
        MyHashMap {
            vals: vec![-1; 2000000],
        }
    }

    fn put(&mut self, key: i32, value: i32) {
        self.vals[key as usize] = value
    }

    fn get(&self, key: i32) -> i32 {
        self.vals[key as usize]
    }

    fn remove(&mut self, key: i32) {
        self.vals[key as usize] = -1
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * let obj = MyHashMap::new();
 * obj.put(key, value);
 * let ret_2: i32 = obj.get(key);
 * obj.remove(key);
 */

#[test]
fn it_works() {
    let result = 2 + 2;
    assert_eq!(result, 4);
}
