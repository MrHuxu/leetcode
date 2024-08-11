from typing import List

DIRECTIONS = {
    "RIGHT": (0, 1),
    "DOWN": (1, 0),
    "LEFT": (0, -1),
    "UP": (-1, 0),
}


class Solution:
    def finalPositionOfSnake(self, n: int, commands: List[str]) -> int:
        loc = [0, 0]
        for command in commands:
            x, y = DIRECTIONS[command]
            loc[0] += x
            loc[1] += y
        return n * loc[0] + loc[1]


print(Solution().finalPositionOfSnake(n=2, commands=["RIGHT", "DOWN"]))
print(Solution().finalPositionOfSnake(n=3, commands=["DOWN", "RIGHT", "UP"]))
