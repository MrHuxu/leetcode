from typing import Dict, List, Set


class Solution:
    def beautifulSubsets(self, nums: List[int], k: int) -> int:
        n = len(nums)

        def helper(idx: int, visited: Dict[int, int]) -> int:
            if idx == n:
                return 0
            ret = 0
            for i in range(idx, n):
                if not visited.get(nums[i] - k, 0) and not visited.get(nums[i] + k, 0):
                    visited[nums[i]] = visited.get(nums[i], 0) + 1
                    ret += 1 + helper(i + 1, visited)
                    visited[nums[i]] -= 1
            return ret

        return helper(0, {})


print(Solution().beautifulSubsets([2, 4, 6], 2))
print(Solution().beautifulSubsets([1], 1))
print(
    Solution().beautifulSubsets(
        [
            1000,
            1000,
            1000,
            1000,
            1000,
            1000,
            1000,
            1000,
            1000,
            1000,
            1000,
            1000,
            1000,
            1000,
            1000,
            1000,
            1000,
            1000,
            1000,
            1000,
        ],
        1,
    )
)
