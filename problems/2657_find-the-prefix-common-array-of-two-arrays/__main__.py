from typing import List


class Solution:
    def findThePrefixCommonArray(self, A: List[int], B: List[int]) -> List[int]:
        n = len(A)
        ret = [0] * n
        cnt_a, cnt_b = {}, {}
        for i, (a, b) in enumerate(zip(A, B)):
            delta = 0
            if cnt_b.get(a, 0) > 0:
                delta += 1
                cnt_b[a] -= 1
            else:
                cnt_a[a] = cnt_a.get(a, 0) + 1
            if cnt_a.get(b, 0) > 0:
                delta += 1
                cnt_a[b] -= 1
            else:
                cnt_b[b] = cnt_b.get(b, 0) + 1
            ret[i] = delta if i == 0 else ret[i - 1] + delta
        return ret


print(Solution().findThePrefixCommonArray(A=[1, 3, 2, 4], B=[3, 1, 2, 4]))
print(Solution().findThePrefixCommonArray(A=[2, 3, 1], B=[3, 1, 2]))
