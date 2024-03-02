class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        ret, left, right, m = 0, 0, 0, {s[0]: 1}
        while True:
            ret = max(ret, right - left + 1)
            right += 1
            if right == len(s):
                break

            m[s[right]] = m.get(s[right], 0) + 1
            while right - left + 1 - max(m.values()) > k:
                m[s[left]] -= 1
                left += 1
        return ret


solution = Solution()
print(solution.characterReplacement("ABAB", 2))
print(solution.characterReplacement(s="AABABBA", k=1))
print(solution.characterReplacement(s="AAAA", k=0))
