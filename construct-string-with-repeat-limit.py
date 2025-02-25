from collections import Counter


class Solution:
    def repeatLimitedString(self, s: str, repeatLimit: int) -> str:
        stack = sorted((ch, cnt) for ch, cnt in Counter(s).items())
        ret = ""
        while stack:
            ch, cnt = stack.pop()
            if not ret or ret[-1] != ch:
                c = min(repeatLimit, cnt)
                ret += ch * c
                cnt -= c
                if cnt:
                    stack.append((ch, cnt))
            else:
                if not stack:
                    break
                ch2, cnt2 = stack.pop()
                ret += ch2
                if cnt2 > 1:
                    stack.append((ch2, cnt2 - 1))
                stack.append((ch, cnt))
        return re


print(Solution().repeatLimitedString(s="cczazcc", repeatLimit=3))
print(Solution().repeatLimitedString(s="aababab", repeatLimit=2))
