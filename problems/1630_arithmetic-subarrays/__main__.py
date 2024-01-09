from typing import List


class Solution:
    def checkArithmeticSubarrays(
        self, nums: List[int], l: List[int], r: List[int]
    ) -> List[bool]:
        ret = [False] * len(l)
        for i, left, right in zip(range(len(l)), l, r):
            tmp = sorted(nums[left : right + 1])
            ret[i] = not [
                j for j in range(2, len(tmp)) if tmp[j] - tmp[j - 1] != tmp[1] - tmp[0]
            ]
        return ret


solution = Solution()
print(solution.checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5]))
