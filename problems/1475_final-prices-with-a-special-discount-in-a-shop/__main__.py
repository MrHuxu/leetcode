from typing import List


class Solution:
    def finalPrices(self, prices: List[int]) -> List[int]:
        for i, price in enumerate(prices):
            for j in range(i + 1, len(prices)):
                if prices[j] <= price:
                    prices[i] -= prices[j]
                    break
        return prices


print(Solution().finalPrices([8, 4, 6, 2, 3]))
print(Solution().finalPrices([1, 2, 3, 4, 5]))
print(Solution().finalPrices([10, 1, 1, 6]))
