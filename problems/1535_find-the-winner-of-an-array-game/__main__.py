from typing import List


class Solution:
    def getWinner(self, arr: List[int], k: int) -> int:
        idx_1, idx_2, cnt = 0, 1, 0
        while idx_2 < len(arr):
            if arr[idx_1] > arr[idx_2]:
                cnt += 1
                idx_2 += 1
            else:
                idx_1, idx_2, cnt = idx_2, idx_2 + 1, 1
            if cnt == k:
                return arr[idx_1]
        return arr[idx_1]


solution = Solution()
print(solution.getWinner(arr=[2, 1, 3, 5, 4, 6, 7], k=2))
print(solution.getWinner(arr=[3, 2, 1], k=10))
print(solution.getWinner([1, 25, 35, 42, 68, 70], 1))
