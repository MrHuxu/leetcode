from collections import Counter


class Solution:
    def minimumDeletions(self, s: str) -> int:
        counter = Counter(s)
        ret = min(counter["a"], counter["b"])
        a_cnt, b_cnt = 0, 0
        for i, ch in enumerate(s):
            if ch == "a":
                a_cnt += 1
            else:
                b_cnt += 1
            ret = min(ret, b_cnt + (counter["a"] - a_cnt))
        return ret


print(Solution().minimumDeletions("aababbab"))
print(Solution().minimumDeletions("bbaaaaabb"))
print(Solution().minimumDeletions("baababbaabbaaabaabbabbbabaaaaaabaabababaaababbb"))
