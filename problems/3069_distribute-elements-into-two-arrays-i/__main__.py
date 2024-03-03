from typing import List


class Solution:
    def resultArray(self, nums: List[int]) -> List[int]:
        arr1, arr2 = [nums[0]], [nums[1]]
        for num in nums[2:]:
            if arr1[-1] > arr2[-1]:
                arr1.append(num)
            else:
                arr2.append(num)
        return arr1 + arr2


print(Solution().resultArray([2, 1, 3]))
print(Solution().resultArray([5, 4, 3, 8]))
