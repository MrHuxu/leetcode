from typing import List


prime_numbers = {
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    37,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97,
}


class Solution:
    def maximumPrimeDifference(self, nums: List[int]) -> int:
        first, last, n = 0, 0, len(nums)
        for i in range(n):
            if nums[i] in prime_numbers:
                first = i
                break
        for i in reversed(range(n)):
            if nums[i] in prime_numbers:
                last = i
                break
        return last - first


print(Solution().maximumPrimeDifference([4, 2, 9, 5, 3]))
print(Solution().maximumPrimeDifference([4, 8, 2, 8]))
print(Solution().maximumPrimeDifference([93, 43, 62, 91]))
