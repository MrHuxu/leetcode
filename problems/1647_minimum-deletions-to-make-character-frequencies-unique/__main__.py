from typing import Dict


class Solution:
    def minDeletions(self, s: str) -> int:
        max_seq = 0
        seqs: Dict[str, int] = {}
        for c in s:
            seqs[c] = seqs.get(c, 0) + 1
            max_seq = max(max_seq, seqs[c])

        arr = [0] * (max_seq + 1)
        for seq in seqs.values():
            arr[seq] += 1

        ret = 0
        for i in reversed(range(1, max_seq + 1)):
            if arr[i] > 1:
                ret += arr[i] - 1
                arr[i - 1] += arr[i] - 1
        return ret


solution = Solution()
print(solution.minDeletions("aab"))
print(solution.minDeletions("ceabaacb"))
print(solution.minDeletions("bbcebab"))
