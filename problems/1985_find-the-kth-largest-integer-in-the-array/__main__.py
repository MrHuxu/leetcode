class Solution:
    def kthLargestNumber(self, nums: List[str], k: int) -> str:
        return str(sorted([int(num) for num in nums])[-k])
