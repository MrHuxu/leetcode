class Solution:
    def takeCharacters(self, s: str, k: int) -> int:
        if k == 0:
            return 0

        left_idx, left_cnt = -1, [0, 0, 0]
        for i, ch in enumerate(s):
            left_cnt[ord(ch) - ord("a")] += 1
            if all(cnt >= k for cnt in left_cnt):
                left_idx = i
                break
        if left_idx == -1:
            return -1

        right_idx, right_cnt = len(s), [0, 0, 0]

        ret = left_idx - 0 + 1 + (len(s) - right_idx)
        while True:
            ret = min(ret, left_idx - 0 + 1 + (len(s) - right_idx))

            if left_idx < 0:
                break

            left_cnt[ord(s[left_idx]) - ord("a")] -= 1
            left_idx -= 1

            while any(left_cnt[i] + right_cnt[i] < k for i in range(3)):
                right_idx -= 1
                right_cnt[ord(s[right_idx]) - ord("a")] += 1

        return ret


print(Solution().takeCharacters(s="aabaaaacaabc", k=2))
print(Solution().takeCharacters(s="a", k=1))
print(Solution().takeCharacters(s="cbbac", k=1))
