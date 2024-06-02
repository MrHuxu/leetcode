from typing import List


class Solution:
    def countDays(self, days: int, meetings: List[List[int]]) -> int:
        meetings.sort(key=lambda x: (x[0], x[1]))
        merged = []
        for meeting in meetings:
            if not merged:
                merged.append(meeting)
            else:
                if merged[-1][1] >= meeting[0] - 1:
                    merged[-1][1] = max(merged[-1][1], meeting[1])
                else:
                    merged.append(meeting)
        ret = 0
        for i, meeting in enumerate(merged):
            if i == 0:
                ret += meeting[0] - 1
            else:
                ret += meeting[0] - merged[i - 1][1] - 1
        ret += days - merged[-1][1]
        return ret


print(Solution().countDays(days=10, meetings=[[5, 7], [1, 3], [9, 10]]))
print(Solution().countDays(days=5, meetings=[[2, 4], [1, 3]]))
print(Solution().countDays(days=6, meetings=[[1, 6]]))
