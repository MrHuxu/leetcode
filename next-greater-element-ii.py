from heapq import heapify, heappop, heappush
from typing import List


class Solution:
    def nextGreaterElements(self, nums: List[int]) -> List[int]:
        ret = [-1] * len(nums)
        nums += nums
        visited_nums, num_indices = [], {}
        heapify(visited_nums)
        for i, num in enumerate(nums):
            if num not in num_indices or not num_indices[num]:
                heappush(visited_nums, num)
            num_indices.setdefault(num, []).append(i)
            while visited_nums and visited_nums[0] < num:
                visited_num = heappop(visited_nums)
                for idx in num_indices[visited_num]:
                    if idx < len(nums) // 2:
                        ret[idx] = num
                num_indices[visited_num] = []
        return ret


print(Solution().nextGreaterElements([1, 2, 1]))
print(Solution().nextGreaterElements(nums=[1, 2, 3, 4, 3]))
