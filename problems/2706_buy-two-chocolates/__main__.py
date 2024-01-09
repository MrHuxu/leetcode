class Solution:
    def buyChoco(self, prices: List[int], money: int) -> int:
        heapq.heapify(prices)
        p1, p2 = heapq.heappop(prices), heapq.heappop(prices)
        return money if money < p1 + p2 else money - p1 - p2