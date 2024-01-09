from typing import List


class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        while len(stones) > 1:
            stones.sort()
            y = stones.pop()
            x = stones.pop()
            if x != y:
                stones.append(y - x)
        return 0 if len(stones) == 0 else stones[0]


print(Solution().lastStoneWeight([2, 7, 4, 1, 8, 1]))
