from typing import List, Set, Tuple


class Solution:
    def findSubsequences(self, nums: List[int]) -> List[List[int]]:
        return self.dfs([], 0, nums)

    def dfs(self, pre: List[int], idx: int, nums: List[int]) -> Set[Tuple[int]]:
        ret = set([tuple(pre)]) if len(pre) > 1 else set()
        for i in range(idx, len(nums)):
            if i > idx and nums[i] == nums[i - 1]:
                continue
            if not pre or nums[i] >= pre[-1]:
                ret.update(self.dfs(pre + [nums[i]], i + 1, nums))
        return ret


print(Solution().findSubsequences([1, 2, 1, 1, 1, 1, 1]))
# print(Solution().findSubsequences([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1]))
