from typing import List


class Solution:
    dp: List[List[int]]

    def maxValue(self, events: List[List[int]], k: int) -> int:
        events.sort(key=lambda x: x[0])
        self.dp = [[-1 for _ in range(k + 1)] for _ in range(len(events))]
        return self.dfs(0, 0, events, k)

    def dfs(self, i: int, end: int, events: List[List[int]], k: int) -> int:
        if i == len(events) or k == 0:
            return 0
        if events[i][0] <= end:
            return self.dfs(i + 1, end, events, k)
        if self.dp[i][k] != -1:
            return self.dp[i][k]
        self.dp[i][k] = max(
            events[i][2] + self.dfs(i + 1, events[i][1], events, k - 1),
            self.dfs(i + 1, end, events, k)
        )
        return self.dp[i][k]


solution = Solution()
print(solution.maxValue(events=[[1, 2, 4], [3, 4, 3], [2, 3, 1]], k=2))
print(solution.maxValue(events=[[1, 2, 4], [3, 4, 3], [2, 3, 10]], k=2))
print(solution.maxValue(
    events=[[1, 1, 1], [2, 2, 2], [3, 3, 3], [4, 4, 4]], k=3))
print(solution.maxValue([[87, 95, 42], [3, 42, 37], [20, 42, 100], [
      53, 84, 80], [10, 88, 38], [25, 80, 57], [18, 38, 33]], 3))
