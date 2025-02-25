from typing import List, Tuple


class Solution:
    def bestClosingTime(self, customers: str) -> int:
        cnt: List[Tuple[int, int]] = [(0, 0)] * (len(customers) + 1)
        total_Y = 0
        for i, c in enumerate(customers):
            if c == "N":
                cnt[i + 1] = (cnt[i][0] + 1, cnt[i + 1][1])
            else:
                cnt[i + 1] = (cnt[i][0], cnt[i + 1][1])
                total_Y += 1
        for i, c in enumerate(customers):
            cnt[i] = (cnt[i][0], total_Y)
            if c == "Y":
                total_Y -= 1
        # print(cnt)
        ret, best_time = 0, sum(cnt[0])
        for i, c in enumerate(cnt):
            tmp = sum(c)
            if tmp < best_time:
                ret = i
                best_time = tmp
        return ret


solution = Solution()
print(solution.bestClosingTime("YYNY"))
print(solution.bestClosingTime("NNNNN"))
print(solution.bestClosingTime("YYYY"))
