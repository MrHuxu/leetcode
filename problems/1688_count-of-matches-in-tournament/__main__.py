class Solution:
    def numberOfMatches(self, n: int) -> int:
        if n == 1:
            return 0
        half = n // 2
        return half + self.numberOfMatches(half + n % 2)
