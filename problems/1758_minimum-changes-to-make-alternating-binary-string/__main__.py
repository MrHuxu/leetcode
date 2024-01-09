class Solution:
    def minOperations(self, s: str) -> int:
        ret1, prev1 = 0, s[0]
        ret2, prev2 = 1, '1' if s[0] == '0' else '0'
        for i in range(1, len(s)):
            if s[i] != prev1:
                prev1 = s[i]
            else:
                ret1 += 1
                prev1 = '1' if s[i] == '0' else '0'
            
            if s[i] != prev2:
                prev2 = s[i]
            else:
                ret2 += 1
                prev2 = '1' if s[i] == '0' else '0'
        return min(ret1, ret2)
        