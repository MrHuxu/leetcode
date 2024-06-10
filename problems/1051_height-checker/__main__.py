class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        return sum(1 for h, e in zip(heights, sorted(heights)) if h != e)
