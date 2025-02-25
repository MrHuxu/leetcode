class Solution:
    def minimizeXor(self, num1: int, num2: int) -> int:
        cnt = 0
        while num2:
            cnt += num2 & 1
            num2 >>= 1
        len1, tmp = 0, num1
        while tmp:
            len1 += 1
            tmp >>= 1
        ret = 0
        for i in reversed(range(len1)):
            if not cnt:
                break

            if (num1 >> i) & 1:
                ret |= 1 << i
                cnt -= 1
        i = 0
        while cnt:
            if not (ret >> i) & 1:
                ret |= 1 << i
                cnt -= 1
            i += 1
        return ret


print(Solution().minimizeXor(3, 5))
print(Solution().minimizeXor(1, 12))
