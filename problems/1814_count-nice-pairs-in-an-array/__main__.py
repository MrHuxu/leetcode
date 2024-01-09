from typing import Dict, List

# nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
# nums[i] - rev(nums[i]) == nums[j] - rev(nums[j])

MOD = 10**9 + 7


class Solution:
    def countNicePairs(self, nums: List[int]) -> int:
        cnt: Dict[int, int] = {}
        for num in nums:
            sub = num - self.rev(0, num)
            cnt[sub] = cnt.get(sub, 0) + 1
        return sum((v * (v - 1) // 2 % MOD) for v in cnt.values()) % MOD

    def rev(self, pre: int, num: int) -> int:
        return pre * 10 + num if num < 10 else self.rev(pre * 10 + num % 10, num // 10)


solution = Solution()
print(solution.countNicePairs([42, 11, 1, 97]))
print(solution.countNicePairs([13, 10, 35, 24, 76]))
print(
    solution.countNicePairs(
        [352171103, 442454244, 42644624, 152727101, 413370302, 293999243]
    )
)
