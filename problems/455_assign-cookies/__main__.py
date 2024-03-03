class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        g.sort()
        s.sort()
        idx_g, idx_s = 0, 0
        while idx_s < len(s) and idx_g < len(g):
            if s[idx_s] >= g[idx_g]:
                idx_g += 1
            idx_s += 1
        return idx_g
