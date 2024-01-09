from typing import List


class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda x: (x[0], x[1]))
        ret, prev_end = 0, intervals[0][1]
        for start, end in intervals[1:]:
            if start >= prev_end:
                prev_end = end
            else:
                ret += 1
                prev_end = min(prev_end, end)
        return ret


solution = Solution()
print(solution.eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]))
print(solution.eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]]))
