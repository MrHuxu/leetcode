import heapq
from typing import List, Set, Tuple


class Solution:
    def totalCost(self, costs: List[int], k: int, candidates: int) -> int:
        ret = 0

        left_idx, right_idx, left_queue, right_queue = 0, len(
            costs) - 1, [], []

        while k > 0:
            while len(left_queue) < candidates and left_idx <= right_idx:
                heapq.heappush(left_queue, costs[left_idx])
                left_idx += 1
            while len(right_queue) < candidates and left_idx <= right_idx:
                heapq.heappush(right_queue, costs[right_idx])
                right_idx -= 1

            left_cost = left_queue[0] if left_queue else 1000000
            right_cost = right_queue[0] if right_queue else 1000000

            if left_cost <= right_cost:
                ret += left_cost
                heapq.heappop(left_queue)
            else:
                ret += right_cost
                heapq.heappop(right_queue)

            k -= 1

        return ret


solution = Solution()
print(solution.totalCost([17, 12, 10, 2, 7, 2, 11, 20, 8], 3, 4))
print(solution.totalCost([1, 2, 4, 1], 3, 3))
print(solution.totalCost([10, 11, 1, 10], 2, 1))
