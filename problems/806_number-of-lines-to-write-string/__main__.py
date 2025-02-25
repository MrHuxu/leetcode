class Solution:
    def numberOfLines(self, widths: List[int], s: str) -> List[int]:
        ret = [1, 0]
        for ch in s:
            width = widths[ord(ch) - ord("a")]
            if ret[1] + width > 100:
                ret[0] += 1
                ret[1] = width
            else:
                ret[1] += width
        return ret
