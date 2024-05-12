class Solution:
    def findPermutationDifference(self, s: str, t: str) -> int:
        pos_t = {ch: i for i, ch in enumerate(t)}
        return sum(abs(i - pos_t[ch]) for i, ch in enumerate(s))