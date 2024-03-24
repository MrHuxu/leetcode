from math import ceil, floor, sqrt


class Solution:
    def minOperations(self, k: int) -> int:
        num = floor(sqrt(k))
        return (num - 1) + ceil(k / num - 1)


print(Solution().minOperations(11))
print(Solution().minOperations(1))
