from typing import List


class Solution:
    def maxEqualRowsAfterFlips(self, matrix: List[List[int]]) -> int:
        row_cnt = {}
        for row in matrix:
            key1, key2 = tuple(row), tuple(1 - r for r in row)
            row_cnt[key1] = row_cnt.get(key1, 0) + 1
            row_cnt[key2] = row_cnt.get(key2, 0) + 1
        return max(row_cnt.values())


print(Solution().maxEqualRowsAfterFlips([[0, 1], [1, 1]]))
print(Solution().maxEqualRowsAfterFlips([[0, 1], [1, 0]]))
print(Solution().maxEqualRowsAfterFlips([[0, 0, 0], [0, 0, 1], [1, 1, 0]]))
