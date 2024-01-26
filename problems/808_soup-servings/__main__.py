from math import ceil
from typing import Dict


OPERATIONS = [
    [4, 0],
    [3, 1],
    [2, 2],
    [1, 3]
]

class Solution:
    dp: Dict[int,Dict[int, float]] = {}
    def soupServings(self, n: int) -> float:
        m = ceil(n / 25)
        for i in range(m + 1):
            self.dp[i] = {}
            if self.dfs(i, i) == 1:
                return 1
        return self.dfs(m, m)

    def dfs(self, a: int, b: int) -> float:
        if a <= 0 and b <= 0:
            return 0.5
        elif a <= 0:
            return 1
        elif b <= 0:
            return 0

        if a in self.dp and b in self.dp[a]:
            return self.dp[a][b]
        
        ret = 0
        for op in OPERATIONS:
            ret += 0.25 * self.dfs(a - op[0], b - op[1])
        self.dp[a][b] = ret
        return ret

solution = Solution()
print(solution.soupServings(50))
print(solution.soupServings(100))
print(solution.soupServings(660295675))