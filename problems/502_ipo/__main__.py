class Solution:
    def findMaximizedCapital(
        self, k: int, w: int, profits: List[int], capital: List[int]
    ) -> int:
        n = len(profits)
        projects = sorted([(capital[i], profits[i]) for i in range(n)])
        max_heap = []
        heapify(max_heap)
        i = 0
        for _ in range(k):
            while i < n and projects[i][0] <= w:
                heappush(max_heap, -projects[i][1])
                i += 1
            if not max_heap:
                break
            w += -heappop(max_heap)
        return w
