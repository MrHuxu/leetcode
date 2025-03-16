from typing import List


class Solution:
    def solveQueries(self, nums: List[int], queries: List[int]) -> List[int]:
        n = len(nums)
        distances, pre_idx, first_idx = [-1] * n, {}, {}
        for i, num in enumerate(nums):
            if num in pre_idx:
                distances[pre_idx[num]] = (
                    min(distances[pre_idx[num]], i - pre_idx[num])
                    if distances[pre_idx[num]] != -1
                    else i - pre_idx[num]
                )
                distances[first_idx[num]] = (
                    min(distances[first_idx[num]], n - i + first_idx[num])
                    if distances[first_idx[num]] != -1
                    else n - i + first_idx[num]
                )
                distances[i] = min(i - pre_idx[num], n - i + first_idx[num])
            pre_idx[num] = i
            if num not in first_idx:
                first_idx[num] = i
        return [distances[query] for query in queries]


print(Solution().solveQueries(nums=[1, 3, 1, 4, 1, 3, 2], queries=[0, 3, 5]))
print(Solution().solveQueries(nums=[1, 2, 3, 4], queries=[0, 1, 2, 3]))
print(Solution().solveQueries([14, 14, 4, 2, 19, 19, 14, 19, 14], [2, 4, 8, 6, 3]))
print(Solution().solveQueries([6, 12, 17, 9, 16, 7, 6], [5, 6, 0, 4]))
