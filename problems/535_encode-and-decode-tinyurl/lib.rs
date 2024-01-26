use std::collections::hash_map::DefaultHasher;
use std::collections::HashMap;
use std::hash::Hash;
use std::hash::Hasher;

struct Codec {
    data: HashMap<String, String>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl Codec {
    fn new() -> Self {
        Codec {
            data: HashMap::new(),
        }
    }

    // Encodes a URL to a shortened URL.
    fn encode(&mut self, longURL: String) -> String {
        let hex_digest = {
            let mut s = DefaultHasher::new();
            longURL.hash(&mut s);
            let s = s.finish();
            format!("{:x}", s)
        };

        self.data.insert(hex_digest.clone(), longURL);
        format!("http://tinyurl.com/{}", hex_digest)
    }

    // Decodes a shortened URL to its original URL.
    fn decode(&self, shortURL: String) -> String {
        let hex_digest = shortURL.replace("http://tinyurl.com/", "");
        println!("{:?}, {}", self.data, hex_digest);
        if let Some(a) = self.data.get(&hex_digest) {
            return a.clone();
        }
        return String::from("");
    }
}

/**
 * Your Codec object will be instantiated and called as such:
 * let obj = Codec::new();
 * let s: String = obj.encode(strs);
 * let ans: VecVec<String> = obj.decode(s);
 */
#[test]
fn it_works() {
    let mut codec = Codec::new();
    let tiny = codec.encode(String::from("https://leetcode.com/problems/design-tinyurl"));
    // assert_eq!("11", tiny);
    assert_eq!(
        codec.decode(tiny),
        String::from("https://leetcode.com/problems/design-tinyurl")
    );
}
