class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        return sorted(list(num * num for num in nums))