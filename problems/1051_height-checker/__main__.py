class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        return sum(1 if h != e else 0 for h, e in zip(heights, sorted(heights)))
