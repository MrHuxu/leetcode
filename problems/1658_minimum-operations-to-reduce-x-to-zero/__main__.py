from typing import List


class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
        total = sum(nums)
        target = total - x

        if target < 0:
            return -1
        if target == 0:
            return len(nums)

        n = len(nums)
        min_operations = float("inf")
        current, left, right = 0, 0, 0
        while right < n:
            current += nums[right]
            right += 1

            while current > target and left < n:
                current -= nums[left]
                left += 1

            if current == target:
                min_operations = min(min_operations, n - (right - left))

        return -1 if min_operations == float("inf") else min_operations


solution = Solution()
print(solution.minOperations([1, 1, 4, 2, 3], 5))
print(solution.minOperations([5, 6, 7, 8, 9], 4))
