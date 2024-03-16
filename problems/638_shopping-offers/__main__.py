from typing import List


class Solution:
    def shoppingOffers(
        self, price: List[int], special: List[List[int]], needs: List[int]
    ) -> int:
        n = len(price)
        dp = {}

        def dfs(curr):
            # print(curr)
            if all(c == 0 for c in curr):
                return 0
            t = tuple(curr)
            if t in dp:
                return dp[t]

            dp[t] = sum(price[i] * curr[i] for i in range(n))
            for s in special:
                if any(s[i] > curr[i] for i in range(n)):
                    continue
                dp[t] = min(dp[t], s[-1] + dfs([curr[i] - s[i] for i in range(n)]))
            return dp[t]

        return dfs(needs)


print(Solution().shoppingOffers([9, 9], [[1, 1, 1]], [2, 2]))
print(
    Solution().shoppingOffers(
        price=[2, 5], special=[[3, 0, 5], [1, 2, 10]], needs=[3, 2]
    )
)
print(
    Solution().shoppingOffers(
        price=[2, 3, 4], special=[[1, 1, 0, 4], [2, 2, 1, 9]], needs=[1, 2, 1]
    )
)
print(Solution().shoppingOffers([9], [[1, 10], [2, 2]], [3]))
