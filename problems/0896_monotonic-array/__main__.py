class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
        incr = None
        for i in range(len(nums) - 1):
            if nums[i + 1] == nums[i]:
                continue
            elif nums[i + 1] > nums[i]:
                if incr is None:
                    incr = True
                    continue
                elif not incr:
                    return False
            else:
                if incr is None:
                    incr = False
                    continue
                elif incr:
                    return False
        return True