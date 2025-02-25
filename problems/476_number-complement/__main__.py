class Solution:
    def findComplement(self, num: int) -> int:
        tmp1, tmp2 = 1, num
        while tmp2 != 0:
            num ^= tmp1
            tmp1 <<= 1
            tmp2 >>= 1
        return num
