class Solution:
    def smallestNumber(self, n: int) -> int:
        ret = 0
        while n:
            ret = (ret << 1) + 1
            n >>= 1
        return ret


print(Solution().smallestNumber(5))
print(Solution().smallestNumber(10))
print(Solution().smallestNumber(3))
