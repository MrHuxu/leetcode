from typing import List


class Solution:
    def maximumRequests(self, n: int, requests: List[List[int]]) -> int:
        return self.traverse(0, 0, [0] * n, requests)

    def traverse(
        self, idx: int, count: int, buildings: List[int], requests: List[List[int]]
    ) -> int:
        if idx == len(requests):
            return count if self.validate(buildings) else 0

        not_transfer = self.traverse(idx + 1, count, buildings, requests)
        buildings[requests[idx][0]] -= 1
        buildings[requests[idx][1]] += 1
        transfer = self.traverse(idx + 1, count + 1, buildings, requests)
        buildings[requests[idx][0]] += 1
        buildings[requests[idx][1]] -= 1
        return max(not_transfer, transfer)

    def validate(self, buildings: List[int]) -> bool:
        for building in buildings:
            if building != 0:
                return False
        return True


solution = Solution()
print(solution.maximumRequests(5, [[0, 1], [1, 0], [0, 1], [1, 2], [2, 0], [3, 4]]))
print(solution.maximumRequests(3, [[0, 0], [1, 2], [2, 1]]))
print(solution.maximumRequests(4, [[0, 3], [3, 1], [1, 2], [2, 0]]))
print(
    solution.maximumRequests(
        3, [[1, 2], [1, 2], [2, 2], [0, 2], [2, 1], [1, 1], [1, 2]]
    )
)
