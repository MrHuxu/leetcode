from typing import Dict, List
import unittest


class Solution:
    def numOfMinutes(
        self, n: int, headID: int, manager: List[int], informTime: List[int]
    ) -> int:
        management: Dict[int, List[int]] = {i: [] for i in range(n)}
        for i in range(n):
            if manager[i] == -1:
                continue
            management[manager[i]].append(i)
        return self.traverse(headID, 0, management, informTime)

    def traverse(
        self,
        manager: int,
        time: int,
        management: Dict[int, List[int]],
        informTime: List[int],
    ) -> int:
        max_time = 0
        for staff in management[manager]:
            max_time = max(
                max_time,
                self.traverse(staff, informTime[manager], management, informTime),
            )
        return time + max_time


class TestSolution(unittest.TestCase):
    def test(self):
        solution = Solution()
        self.assertEqual(
            solution.numOfMinutes(n=1, headID=0, manager=[-1], informTime=[0]), 0
        )
        self.assertEqual(
            solution.numOfMinutes(
                n=6,
                headID=2,
                manager=[2, 2, -1, 2, 2, 2],
                informTime=[0, 0, 1, 0, 0, 0],
            ),
            1,
        )
