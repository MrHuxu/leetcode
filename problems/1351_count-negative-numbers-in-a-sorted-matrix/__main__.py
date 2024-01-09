from typing import List


class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        ret = 0
        for row in grid:
            for num in row:
                if num < 0:
                    ret += 1
        return ret
