from typing import List


class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        slow, fast = nums[0], nums[0]
        slow, fast = nums[slow], nums[nums[fast]]
        while slow != fast:
            slow, fast = nums[slow], nums[nums[fast]]
        slow = nums[0]
        while fast != slow:
            slow, fast = nums[slow], nums[fast]
        return slow


solution = Solution()
print(solution.findDuplicate([1, 3, 4, 2, 2]))
