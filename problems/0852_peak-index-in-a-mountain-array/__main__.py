from typing import List


class Solution:
    def peakIndexInMountainArray(self, arr: List[int]) -> int:
        left, right = 0, len(arr) - 1
        while left <= right:
            mid = (left + right) // 2
            if arr[mid] < arr[mid + 1]:
                left = mid + 1
            elif arr[mid] < arr[mid - 1]:
                right = mid - 1
            else:
                return mid
        return -1


solution = Solution()
print(solution.peakIndexInMountainArray([0, 1, 0]))
print(solution.peakIndexInMountainArray([0, 1, 2, 0]))
print(solution.peakIndexInMountainArray([0, 10, 5, 2]))
