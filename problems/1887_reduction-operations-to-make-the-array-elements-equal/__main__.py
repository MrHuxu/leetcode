from typing import List


class Solution:
    def reductionOperations(self, nums: List[int]) -> int:
        nums.sort()
        ret, reduce_times = 0, 0
        for i in range(1, len(nums)):
            if nums[i] != nums[i - 1]:
                reduce_times += 1
            ret += reduce_times
        return ret


solution = Solution()
print(solution.reductionOperations([5, 1, 3]))
print(solution.reductionOperations([1, 1, 1]))
print(solution.reductionOperations([1, 1, 2, 2, 3]))
