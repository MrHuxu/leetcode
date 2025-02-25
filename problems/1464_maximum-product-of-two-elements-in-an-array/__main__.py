class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        nums = [-num for num in nums]
        heapq.heapify(nums)
        return (-heapq.heappop(nums) - 1) * (-heapq.heappop(nums) - 1)
