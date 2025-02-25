class Solution:
    def maxCoins(self, piles: List[int]) -> int:
        piles.sort()
        return sum(piles[len(piles) - i * 2] for i in range(1, len(piles) // 3 + 1))
