class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n, s = len(nums), set(nums)
        for i in range(n + 1):
            if i not in s:
                return i
