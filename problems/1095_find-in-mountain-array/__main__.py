# """
# This is MountainArray's API interface.
# You should not implement it, or speculate about its implementation
# """
class MountainArray:
    def get(self, index: int) -> int:
        return 0

    def length(self) -> int:
        return 0


class Solution:
    def findInMountainArray(self, target: int, mountain_arr: MountainArray) -> int:
        peak_idx = -1
        left, right = 0, mountain_arr.length() - 1
        while left <= right:
            mid = (left + right) // 2
            if mid == 0:
                left = mid + 1
                continue
            elif mid == mountain_arr.length() - 1:
                right = mid - 1
                continue

            mid_left_val, mid_val, mid_right_val = (
                mountain_arr.get(mid - 1),
                mountain_arr.get(mid),
                mountain_arr.get(mid + 1),
            )
            if mid_val > mid_left_val and mid_val > mid_right_val:
                peak_idx = mid
                break
            elif mid_val < mid_left_val:
                right = mid - 1
            else:
                left = mid + 1

        left, right = 0, peak_idx
        while left <= right:
            mid = (left + right) // 2
            mid_val = mountain_arr.get(mid)
            if mid_val == target:
                return mid
            elif mid_val < target:
                left = mid + 1
            else:
                right = mid - 1

        left, right = peak_idx + 1, mountain_arr.length() - 1
        while left <= right:
            mid = (left + right) // 2
            mid_val = mountain_arr.get(mid)
            if mid_val == target:
                return mid
            elif mid_val < target:
                right = mid - 1
            else:
                left = mid + 1

        return -1
