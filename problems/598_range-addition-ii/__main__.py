class Solution:
    def maxCount(self, m: int, n: int, ops: List[List[int]]) -> int:
        for a, b in ops:
            m, n = min(m, a), min(n, b)
        return m * n
