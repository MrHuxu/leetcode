class Solution:
    def longestPalindrome(self, s: str) -> int:
        ret, odd_cnt = 0, 0
        for cnt in Counter(s).values():
            if cnt % 2 == 0:
                ret += cnt
            else:
                odd_cnt = 1
                ret += cnt - 1
        return ret + odd_cnt
