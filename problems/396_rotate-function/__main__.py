class Solution:
    def maxRotateFunction(self, nums: List[int]) -> int:
        n, sums1, sums2 = (
            len(nums),
            list(accumulate(nums)),
            list(accumulate([i * num for i, num in enumerate(nums)])),
        )
        ret = sums2[-1]
        left = 0  # F(1) = (0 * 6) + (1 * 4) + (2 * 3) + (3 * 2) = 0 + 4 + 6 + 6 -> left: 0, right: 4 + 6 + 6
        for i in range(1, n):
            left += sums1[-1] - sums1[-i]
            right = sums1[-i - 1] * i + sums2[-i - 1]
            ret = max(ret, left + right)
        return ret
