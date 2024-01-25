struct Solution;

impl Solution {
    pub fn is_robot_bounded(instructions: String) -> bool {
        let mut pos = (0, 0);
        let mut direction = (0, 1);

        for instruction in instructions.as_bytes().iter() {
            if *instruction == 'G' as u8 {
                pos.0 += direction.0;
                pos.1 += direction.1;
                continue;
            }

            direction = Solution::turn(*instruction as char, direction);
        }

        if pos.0 == 0 && pos.1 == 0 {
            return true;
        }

        direction.0 != 0 || direction.1 != 1
    }

    fn turn(ch: char, curr: (i32, i32)) -> (i32, i32) {
        match curr {
            (0, _) => match ch {
                'L' => (0 - curr.1, 0),
                _ => (curr.1, 0),
            },
            (_, _) => match ch {
                'L' => (0, curr.0),
                _ => (0, 0 - curr.0),
            },
        }
    }
}
fn main() {
    println!("Hello, world!");
}
