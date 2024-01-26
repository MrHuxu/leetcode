import unittest
from typing import List


class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        ret: List[str] = []

        if len(nums) == 0:
            return ret

        start = nums[0]
        for i in range(1, len(nums)):
            if nums[i] != nums[i - 1] + 1:
                if start == nums[i - 1]:
                    ret.append(str(start))
                else:
                    ret.append(f'{start}->{nums[i - 1]}')
                start = nums[i]
        if nums[-1] == start:
            ret.append(str(start))
        else:
            ret.append(f'{start}->{nums[-1]}')
        return ret


class TestSolution(unittest.TestCase):

    def test(self):
        solution = Solution()
        self.assertListEqual(solution.summaryRanges(
            [0, 1, 2, 4, 5, 7]), ['0->2', '4->5', '7'])
        self.assertListEqual(solution.summaryRanges(
            [0, 2, 3, 4, 6, 8, 9]), ['0', '2->4', '6', '8->9'])
