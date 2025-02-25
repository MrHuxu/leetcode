class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        return n > 0 and not (n & (n - 1))

    def isPowerOfTwo2(self, n: int) -> bool:
        if n <= 0:
            return False
        if n == 1:
            return True
        while n > 1:
            if n % 2 == 1:
                return False
            n = n // 2
        return True
