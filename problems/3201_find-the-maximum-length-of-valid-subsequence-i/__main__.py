from typing import List


class Solution:
    def maximumLength(self, nums: List[int]) -> int:
        odd_0, odd_1, even_0, even_1 = 0, 0, 0, 0
        for num in nums:
            if num & 1:
                odd_0 += 1
                odd_1 = max(odd_1, even_1 + 1)
            else:
                even_0 += 1
                even_1 = max(even_1, odd_1 + 1)
        return max(odd_0, odd_1, even_0, even_1)


print(Solution().maximumLength([1, 2, 3, 4]))
print(Solution().maximumLength([1, 2, 1, 1, 2, 1, 2]))
print(Solution().maximumLength([1, 3]))
