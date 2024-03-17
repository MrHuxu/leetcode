from collections import Counter
from itertools import accumulate


class Solution:
    def minimumDeletions(self, word: str, k: int) -> int:
        ret = len(word)
        cnts = list(Counter(word).values())
        cnts.sort()
        total, accu = len(word), list(accumulate(cnts))
        # print(cnts, total, accu)
        left, right = 0, 0
        while left < len(cnts):
            while right < len(cnts) and cnts[right] - cnts[left] <= k:
                right += 1
            right -= 1
            ret = min(
                ret,
                (0 if left == 0 else accu[left - 1])
                + (total - accu[right] - (cnts[left] + k) * (len(cnts) - 1 - right)),
            )
            left += 1
        return ret


print(Solution().minimumDeletions(word="aabcaba", k=0))  # 3
print(Solution().minimumDeletions(word="dabdcbdcdcd", k=2))  # 2
print(Solution().minimumDeletions(word="aaabaaa", k=2))  # 1
print(Solution().minimumDeletions("ahahnhahhah", 1))  # 2
