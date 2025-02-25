from typing import Optional, Tuple


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def addTwoNumbers(
        self, l1: Optional[ListNode], l2: Optional[ListNode]
    ) -> Optional[ListNode]:
        len1, len2 = 0, 0
        tmp1, tmp2 = l1, l2
        while tmp1:
            len1 += 1
            tmp1 = tmp1.next
        while tmp2:
            len2 += 1
            tmp2 = tmp2.next
        node, carry = self.helper(len1 - len2, l1, l2)
        if carry:
            node = ListNode(1, node)
        return node

    def helper(
        self, len_gap: int, l1: Optional[ListNode], l2: Optional[ListNode]
    ) -> Tuple[Optional[ListNode], int]:
        if not l1 or not l2:
            return None, False
        next, carry = self.helper(
            len_gap if len_gap == 0 else len_gap - 1 if len_gap > 0 else len_gap + 1,
            l1.next if len_gap >= 0 else l1,
            l2.next if len_gap <= 0 else l2,
        )
        sum = (0 if len_gap < 0 else l1.val) + (0 if len_gap > 0 else l2.val) + carry
        return ListNode(sum % 10, next), sum // 10


solution = Solution()
node = solution.addTwoNumbers(
    ListNode(7, ListNode(2, ListNode(4, ListNode(3)))),
    ListNode(5, ListNode(6, ListNode(4))),
)
print(node.val)
print(node.next.val)
print(node.next.next.val)
print(node.next.next.next.val)
