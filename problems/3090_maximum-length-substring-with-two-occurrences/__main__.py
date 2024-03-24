class Solution:
    def maximumLengthSubstring(self, s: str) -> int:
        ret = 2
        left, right, cnt = 0, 0, {}
        while right < len(s):
            ch = s[right]
            cnt[ch] = cnt.get(ch, 0) + 1
            if cnt[ch] <= 2:
                ret = max(ret, right - left + 1)
            else:
                while cnt[ch] > 2:
                    cnt[s[left]] -= 1
                    left += 1
            right += 1
        return ret


print(Solution().maximumLengthSubstring("bcbbbcba"))
print(Solution().maximumLengthSubstring("aaaa"))
