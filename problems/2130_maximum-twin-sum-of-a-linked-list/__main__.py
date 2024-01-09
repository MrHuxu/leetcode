from optparse import Option
from typing import Optional, Tuple
import unittest


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        if not head:
            return 0
        n = 0

        tmp = head
        while tmp:
            n += 1
            tmp = tmp.next

        (_, maxVal) = self.helper(head, 0, n // 2)
        return maxVal

    def helper(self, head: Optional[ListNode], step: int, half: int) -> Tuple[Optional[ListNode], int]:
        if step == half:
            return (head, head.val if head else 0)

        (twin, maxVal) = self.helper(head.next if head else None, step + 1, half)
        maxVal = max(maxVal, (head.val if head else 0) +
                     (twin.val if twin else 0))
        return (twin.next if twin else None, maxVal)


class TestSolution(unittest.TestCase):
    def test(self):
        solution = Solution()
        self.assertEqual(solution.pairSum(
            ListNode(5, ListNode(4, ListNode(2, ListNode(1))))), 6)
