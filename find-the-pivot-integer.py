class Solution:
    def pivotInteger(self, n: int) -> int:
        accu = list(accumulate(range(1, n + 1)))
        left, right = 1, n
        while left <= right:
            mid = (left + right) // 2
            left_part, right_part = accu[mid - 1], accu[-1] - accu[mid - 1] + mid
            if left_part == right_part:
                return mid
            elif left_part > right_part:
                right = mid - 1
            else:
                left = mid + 1
        return -1
