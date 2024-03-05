class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        ret, x = 0, x ^ y
        while x != 0:
            ret += x & 1
            x >>= 1
        return ret
